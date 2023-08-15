import 'reflect-metadata';
import { Request, Response, NextFunction, RequestHandler } from 'express';

import { E_Methods } from './ts/Methods';
import { E_MetadataKeys } from './ts/MetadataKeys';
import { AppRouter } from '../../AppRouter';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // Loop through all the methods in the class
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(E_MetadataKeys.PATH, target.prototype, key);
      const method: E_Methods = Reflect.getMetadata(E_MetadataKeys.METHOD, target.prototype, key);
      const middlewares =
        Reflect.getMetadata(E_MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyProps =
        Reflect.getMetadata(E_MetadataKeys.VALIDATOR, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
