import 'reflect-metadata';

import { E_Methods } from './ts/Methods';
import { E_MetadataKeys } from './ts/MetadataKeys';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(E_MetadataKeys.PATH, target.prototype, key);
      const method: E_Methods = Reflect.getMetadata(E_MetadataKeys.METHOD, target.prototype, key);
      const middlewares =
        Reflect.getMetadata(E_MetadataKeys.MIDDLEWARE, target.prototype, key) || [];

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
