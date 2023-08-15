import 'reflect-metadata';
import { RequestHandler } from 'express';

import { E_MetadataKeys } from './ts/MetadataKeys';
import { E_Methods } from './ts/Methods';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(E_MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(E_MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(E_Methods.GET);
export const put = routeBinder(E_Methods.PUT);
export const post = routeBinder(E_Methods.POST);
export const del = routeBinder(E_Methods.DEL);
export const patch = routeBinder(E_Methods.PATCH);
