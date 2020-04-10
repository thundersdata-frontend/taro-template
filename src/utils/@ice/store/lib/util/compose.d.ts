import { Ctx, Middleware, ComposeFunc } from '../types';
/**
 * Compose a middleware chain consisting of all the middlewares
 * @param {array} middlewares - middlewares user passed
 * @param {object} ctx - middleware context
 * @return {function} middleware chain
 */
export default function compose(middlewares: Middleware[], ctx: Ctx): ComposeFunc;
