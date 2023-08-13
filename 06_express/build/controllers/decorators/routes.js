"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./ts/MetadataKeys");
var Methods_1 = require("./ts/Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.E_MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.E_MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.E_Methods.GET);
exports.put = routeBinder(Methods_1.E_Methods.PUT);
exports.post = routeBinder(Methods_1.E_Methods.POST);
exports.del = routeBinder(Methods_1.E_Methods.DEL);
exports.patch = routeBinder(Methods_1.E_Methods.PATCH);
