import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

new CustomMap('map');

console.log(user);
console.log(company);