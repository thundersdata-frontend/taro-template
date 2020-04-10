"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("./store");
var warning_1 = require("./util/warning");
var Icestore = /** @class */ (function () {
    function Icestore() {
        /** Stores registered */
        this.stores = {};
        /** Global middlewares applied to all stores */
        this.globalMiddlewares = [];
        /** middleware applied to single store */
        this.middlewareMap = {};
    }
    /**
     * Register multiple stores
     * @param {object} models - multiple store's model
     * @return {object} hooks which bind the user defined model used for typescript infer
     */
    Icestore.prototype.registerStores = function (models) {
        var _this = this;
        var stores = {};
        function getModel(namespace) {
            var store = stores[namespace];
            if (!store) {
                throw new Error("Not found namespace: " + namespace + ".");
            }
            return store;
        }
        Object.keys(models).forEach(function (namespace) {
            var storeMiddlewares = _this.middlewareMap[namespace] || [];
            var middlewares = _this.globalMiddlewares.concat(storeMiddlewares);
            stores[namespace] = new store_1.default(namespace, models[namespace], middlewares);
        });
        var useStore = function (namespace) {
            return getModel(namespace).useStore();
        };
        var useStores = function (namespaces) {
            var result = {};
            namespaces.forEach(function (namespace) {
                result[namespace] = getModel(namespace).useStore();
            });
            return result;
        };
        var getState = function (namespace) {
            return getModel(namespace).getState();
        };
        return {
            useStore: useStore,
            useStores: useStores,
            getState: getState,
        };
    };
    /**
     * Apply middleware to stores
     * @param {array} middlewares - middlewares queue of store
     * @param {string} namespace - unique name of store
     */
    Icestore.prototype.applyMiddleware = function (middlewares, namespace) {
        if (namespace !== undefined) {
            this.middlewareMap[namespace] = middlewares;
        }
        else {
            this.globalMiddlewares = middlewares;
        }
    };
    /**
     * Find store by namespace
     * @deprecated
     * @param {string} namespace - unique name of store
     * @return {object} store instance
     */
    Icestore.prototype.getModel = function (namespace) {
        var store = this.stores[namespace];
        if (!store) {
            throw new Error("Not found namespace: " + namespace + ".");
        }
        return store;
    };
    /**
     * Register single store
     * @deprecated
     * @param {string} namespace - unique name of store
     * @param {object} model - store's model consists of state and actions
     * @return {object} store instance
     */
    Icestore.prototype.registerStore = function (namespace, model) {
        warning_1.default('Warning: Register store via registerStore API is deprecated and about to be removed in future version. Use the registerStores API instead. Refer to https://github.com/ice-lab/icestore#getting-started for example.');
        if (this.stores[namespace]) {
            throw new Error("Namespace have been used: " + namespace + ".");
        }
        var storeMiddlewares = this.middlewareMap[namespace] || [];
        var middlewares = this.globalMiddlewares.concat(storeMiddlewares);
        this.stores[namespace] = new store_1.default(namespace, model, middlewares);
        return this.stores[namespace];
    };
    /**
     * Get state of store by namespace
     * @deprecated
     * @param {string} namespace - unique name of store
     * @return {object} store's state
     */
    Icestore.prototype.getState = function (namespace) {
        warning_1.default('Warning: Get state via getState API is deprecated and about to be removed in future version. Use registerStores API to register stores and use getState from its return value instead. Refer to https://github.com/ice-lab/icestore#getting-started for example.');
        return this.getModel(namespace).getState();
    };
    /**
     * Hook of using store
     * @deprecated
     * @param {string} namespace - unique name of store
     * @return {object} single store's config
     */
    Icestore.prototype.useStore = function (namespace) {
        warning_1.default('Warning: Use store via useStore API is deprecated and about to be removed in future version. Please use registerStores API to register stores and use useStore from its return value instead. Refer to https://github.com/ice-lab/icestore#getting-started for example.');
        return this.getModel(namespace).useStore();
    };
    /**
     * Hook of using multiple stores
     * @deprecated
     * @param {string} namespace - unique name of store
     * @return {array} array of multiple store's config
     */
    Icestore.prototype.useStores = function (namespaces) {
        var _this = this;
        warning_1.default('Warning: Use stores via useStores API is deprecated and about to be removed in future version. Please use registerStores API to register stores and use useStores from its return value instead. Refer to https://github.com/ice-lab/icestore#getting-started for example.');
        return namespaces.map(function (namespace) { return _this.useStore(namespace); });
    };
    ;
    return Icestore;
}());
exports.default = Icestore;
//# sourceMappingURL=index.js.map