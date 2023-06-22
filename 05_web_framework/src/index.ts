/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root')!);

userForm.render();
