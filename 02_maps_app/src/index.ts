/**
 * IMPORTANT: This is a TypeScript project, so we need to compile it to JavaScript.
 * Application can be tested in browser with Parcel: https://parceljs.org/
 * npx parcel 02_maps_app/src/index.html
 */

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

console.log(user);
console.log(company);

customMap.addMarker(user);
customMap.addMarker(company);
