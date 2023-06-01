/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { User } from './models/User';

const user = new User({ id: 1, name: 'User 1', age: 20 });

user.on('save', () => {
  console.log('User saved!');
  console.log(user);
});

user.on('change', () => {
  console.log('User updated!');
  console.log(user);
});

user.save();
