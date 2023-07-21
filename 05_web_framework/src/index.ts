/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, IUserProps } from './models/User';

const users = new Collection('http://localhost:3001/users', (json: IUserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
