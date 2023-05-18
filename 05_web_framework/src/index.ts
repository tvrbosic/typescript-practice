/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/

import axios from 'axios';
import { User } from './models/User';

axios.post('http://localhost:3001/users', {
  name: 'myname',
  age: 20,
});
