"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./ts/MetadataKeys");
var AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.E_MetadataKeys.PATH, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.E_MetadataKeys.METHOD, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.E_MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
