/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
