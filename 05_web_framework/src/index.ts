/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'NEW NAME', age: 999 });
user.save();
user.fetch();
