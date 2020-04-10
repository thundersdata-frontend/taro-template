import { Middleware } from './types';

export default class Store {
  /** Store state and actions user defined */
  private model;
  /** Queue of setState method from useState hook */
  private queue;
  /** Namespace of store */
  private namespace;
  /** Middleware queue of store */
  private middlewares;
  /** Flag of whether disable loading effect globally */
  disableLoading: boolean;
  /**
   * Constuctor of Store
   * @param {string} namespace - unique name of store
   * @param {object} model - object of state and actions used to init store
   * @param {array} middlewares - middlewares queue of store
   */
  constructor(namespace: string, model: any, middlewares: Middleware[]);
  /**
   * Create action which will trigger state update after mutation
   * @param {function} func - original method user defined
   * @param {string} actionName - name of action function
   * @return {function} action function
   */
  private createAction;
  /**
   * Get state from model
   * @return {object} state
   */
  getState: <M>() => { [K in keyof M]?: M[K] };
  /**
   * Trigger setState method in queue
   */
  private setState;
  /**
   * Hook used to register setState and expose model
   * @return {object} model of store
   */
  useStore<M>(): M;
}
