/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { User } from './models/User';

const user = new User({ name: 'User 1', age: 20 });

user.sync.save(user.attributes.getAll());
