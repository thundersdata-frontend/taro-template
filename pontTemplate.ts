import * as Pont from 'pont-engine';
import { CodeGenerator, Interface, Property } from 'pont-engine';

export class FileStructures extends Pont.FileStructures {
  private myGenerators: CodeGenerator[] = [];
  constructor(generators: CodeGenerator[], usingMultipleOrigins: boolean) {
    super(generators, usingMultipleOrigins);
    this.myGenerators = generators;
  }

  /**
   * 更改service index内容生成逻辑，避免API直接暴露给window
   */
  getDataSourcesTs() {
    const dsNames = this.myGenerators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
        })
        .join('\n')}

      (global as any).defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      export default {
        ${dsNames.join(',\n')}
      };
    `;
  }
}

export default class MyGenerator extends CodeGenerator {
  enum: Array<string | number> = [];
  setEnum(enums: Array<string | number> = []) {
    this.enum = enums.map(value => {
      if (typeof value === 'string') {
        if (!value.startsWith("'")) {
          value = "'" + value;
        }

        if (!value.endsWith("'")) {
          value = value + "'";
        }
      }

      return value;
    });
  }

  /** 获取总的类型定义代码 */
  getDeclaration() {
    return `
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      interface AjaxResponse<T> {
        code: number;
        data: T;
        message: string;
        success: boolean;
      }

      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
  }

  /** 获取所有基类文件代码 */
  getBaseClassesIndex() {
    const clsCodes = this.dataSource.baseClasses.map(
      base => `
      class ${base.name} {
        ${base.properties
          .map(prop => {
            return this.toPropertyCodeWithInitValue(prop, base.name);
          })
          .filter(id => id)
          .join('\n')}
      }
    `,
    );

    if (this.dataSource.name) {
      return `
      ${clsCodes.join('\n')}
      export const ${this.dataSource.name} = {
        ${this.dataSource.baseClasses.map(bs => bs.name).join(',\n')}
      }
    `;
    }

    return clsCodes.map(cls => `export ${cls}`).join('\n');
  }

  /** 获取所有模块的 index 入口文件 */
  // getModsIndex() {
  //   let conclusion = `
  //     const API: any = {};
  //     ${this.dataSource.mods.map(mod => this.getModInitStatement('API', mod.name)).join('\n')}
  //     (window as any).API = API;
  //   `;

  //   // dataSource name means multiple dataSource
  //   if (this.dataSource.name) {
  //     conclusion = `
  //       export const ${this.dataSource.name} = {
  //         ${this.dataSource.mods.map(mod => `${mod.name},`).join('\n')}
  //       };
  //     `;
  //   }

  //   return `
  //     ${this.dataSource.mods
  //       .map(mod => {
  //         // .replace(/\//g, '.').replace(/^\./, '').replace(/\./g, '_') 转换 / .为下划线
  //         // exp: /api/v1/users  => api_v1_users
  //         // exp: api.v1.users => api_v1_users
  //         const modName = mod.name
  //           .replace(/\//g, '.')
  //           .replace(/^\./, '')
  //           .replace(/\./g, '_');
  //         return `import * as ${modName} from './${modName}';`;
  //       })
  //       .join('\n')}

  //     ${conclusion}
  //   `;
  // }

  toPropertyCodeWithInitValue(prop: Property, baseName = '') {
    this.setEnum(prop.dataType.enum);
    const { typeName, isDefsType } = prop.dataType;
    let typeWithValue = `= ${this.getInitialValue(typeName, isDefsType, false)}`;

    if (prop.dataType.typeName === baseName) {
      typeWithValue = `= {}`;
    }

    let name = prop.name;
    if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
      name = `'${name}'`;
    }

    return `
    /** ${prop.description || prop.name} */
    ${name} ${typeWithValue}
    `;
  }

  getDefName(originName: string, typeName: string, isDefsType: boolean) {
    let name = typeName;

    if (isDefsType) {
      name = originName ? `defs.${originName}.${typeName}` : `defs.${typeName}`;
    }

    return name;
  }

  initClassValue(isDefsType: boolean, usingDef: boolean, typeName: string) {
    const originName = this.dataSource.name;
    if (!usingDef) {
      return `new ${typeName}()`;
    }
    return `new ${this.getDefName(originName, typeName, isDefsType)}()`;
  }

  initEnumValue() {
    const str = this.enum[0];
    if (typeof str === 'string') {
      return `${str}`;
    }
    return str + '';
  }

  initNormalTypeValue(typeName: string) {
    switch (typeName) {
      case 'Array':
        return '[]';

      case 'boolean':
        return 'false';

      case 'string':
        return "''";

      case 'number':
      default:
        return 'undefined';
    }
  }

  getInitialValue(typeName: string, isDefsType: boolean, usingDef = true) {
    if (isDefsType) {
      return this.initClassValue(isDefsType, usingDef, typeName);
    } else if (this.enum && this.enum.length) {
      return this.initEnumValue();
    } else {
      return this.initNormalTypeValue(typeName);
    }
  }

  /** 生成的api.d.ts文件中的对应每个接口的内容 */
  getInterfaceContentInDeclaration(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode
      ? `bodyParams: ${bodyParamsCode}, params: Params`
      : `params: Params`;

    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `bodyParams: ${bodyParamsCode}` : '';
    }

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

      export function fetch(${requestParams}): Promise<AjaxResponse<Response>>;
    `;
  }

  getFetchMethod(method: string, bodyParamsCode: string) {
    // 为避免method匹配不上，全部转化为大写
    const upperMethod = method.toUpperCase();
    return bodyParamsCode ? upperMethod + ':JSON' : upperMethod;
  }

  getRequest(
    bodyParamsCode: string,
    method: string,
    paramsStr: string,
    path: string,
    responseInterfaceStr: string,
  ) {
    const fetchMethod = this.getFetchMethod(method, bodyParamsCode);

    let requestStr = '';
    switch (fetchMethod) {
      case 'GET':
        requestStr = `request.get<${responseInterfaceStr}>(backEndUrl + "${path}", params)`;
        break;
      case 'PUT':
        requestStr = `request.put<${responseInterfaceStr}>(backEndUrl + "${path}", params)`;
        break;
      case 'DELETE':
        requestStr = `request.delete<${responseInterfaceStr}>(backEndUrl + "${path}", params)`;
        break;
      case 'POST':
        requestStr = `request.postForm<${responseInterfaceStr}>(backEndUrl + "${path}", params, {})`;
        break;
      case 'POST:JSON':
        requestStr = `request.postJSON<${responseInterfaceStr}>(backEndUrl + "${path}", ${paramsStr})`;
        break;
    }
    return requestStr;
  }

  /** 生成的接口请求部分 */
  getInterfaceContent(inter: Interface) {
    // type为body的参数
    const bodyParamsCode = inter.getBodyParamsCode();
    // 判断是否有params参数
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode ? `bodyParams={}, params={}` : `params={}`;
    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `bodyParams={}` : 'params={}';
    }
    // 从 mods 里面查询到 controller 名称
    let controllerName = '';
    const modIndex = this.dataSource.mods.findIndex(
      item => item.interfaces.filter(({ path }) => path === inter.path).length > 0,
    );
    if (modIndex > -1) {
      controllerName = this.dataSource.mods[modIndex].name;
    }
    // 返回的内容格式
    const responseInterfaceStr = `AjaxResponse<API.${this.dataSource.name}.${controllerName}.${inter.name}.Response>`;

    const paramsStr = !hasGetParams ? 'bodyParams, {}' : 'bodyParams, params';
    const requestStr = this.getRequest(
      bodyParamsCode,
      inter.method,
      paramsStr,
      inter.path,
      responseInterfaceStr,
    );

    const { typeName, isDefsType } = inter.response;
    const initValue = this.getInitialValue(typeName, isDefsType);

    let defsStr = '';
    if (inter.response.isDefsType) {
      defsStr = "import * as defs from '../../baseClass';";
    }

    return `
      /**
      * @description ${inter.description}
      */
      ${defsStr}
      import serverConfig from '../../../../../server.config';
      import request, { AjaxResponse } from '@/utils/taro-request';

      const backEndUrl = serverConfig()['${this.dataSource.name}'];

      export const init = ${initValue};

      export async function fetch(${requestParams}) {
        try {
          const response = await ${requestStr};
          const result = response.data || {};
          if (!result.success) throw result;
          return result;
        } catch(error) {
          if (error.message) {
            throw {
              ...error,
              data: ${initValue},
            };
          }
          throw {};
        }
      }
    `;
  }
}
