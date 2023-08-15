import 'reflect-metadata';

import { E_MetadataKeys } from './ts/MetadataKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(E_MetadataKeys.VALIDATOR, keys, target, key);
  };
}
