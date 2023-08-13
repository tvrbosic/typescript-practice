import 'reflect-metadata';
import { RequestHandler } from 'express';

import { E_MetadataKeys } from './ts/MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(E_MetadataKeys.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(E_MetadataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
  };
}
