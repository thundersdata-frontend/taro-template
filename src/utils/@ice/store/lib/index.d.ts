import { Store as Wrapper, Middleware } from './types';

export default class Icestore {
  /** Stores registered */
  private stores;
  /** Global middlewares applied to all stores */
  private globalMiddlewares;
  /** middleware applied to single store */
  private middlewareMap;
  /**
   * Register multiple stores
   * @param {object} models - multiple store's model
   * @return {object} hooks which bind the user defined model used for typescript infer
   */
  registerStores<M>(
    models: M,
  ): {
    useStore: <K extends keyof M>(namespace: K) => Wrapper<M[K]>;
    useStores: <K_1 extends keyof M>(namespaces: K_1[]) => { [K_2 in keyof M]: Wrapper<M[K_2]> };
    getState: <K_3 extends keyof M>(
      namespace: K_3,
    ) => {
      [K1 in keyof Pick<
        M[K_3],
        { [K_4 in keyof M[K_3]]: M[K_3][K_4] extends Function ? never : K_4 }[keyof M[K_3]]
      >]?: Pick<
        M[K_3],
        { [K_4 in keyof M[K_3]]: M[K_3][K_4] extends Function ? never : K_4 }[keyof M[K_3]]
      >[K1];
    };
  };
  /**
   * Apply middleware to stores
   * @param {array} middlewares - middlewares queue of store
   * @param {string} namespace - unique name of store
   */
  applyMiddleware(middlewares: Middleware[], namespace?: string): void;
  /**
   * Find store by namespace
   * @deprecated
   * @param {string} namespace - unique name of store
   * @return {object} store instance
   */
  private getModel;
  /**
   * Register single store
   * @deprecated
   * @param {string} namespace - unique name of store
   * @param {object} model - store's model consists of state and actions
   * @return {object} store instance
   */
  registerStore(
    namespace: string,
    model: {
      [namespace: string]: any;
    },
  ): any;
  /**
   * Get state of store by namespace
   * @deprecated
   * @param {string} namespace - unique name of store
   * @return {object} store's state
   */
  getState(namespace: string): any;
  /**
   * Hook of using store
   * @deprecated
   * @param {string} namespace - unique name of store
   * @return {object} single store's config
   */
  useStore(namespace: string): any;
  /**
   * Hook of using multiple stores
   * @deprecated
   * @param {string} namespace - unique name of store
   * @return {array} array of multiple store's config
   */
  useStores(namespaces: string[]): any[];
}
