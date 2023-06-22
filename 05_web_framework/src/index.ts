/* 
Install json-server with: 
sudo npm install -g json-server

Build and run project with:
npm run start:db
npm run start:parcel
*/
import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3001');

collection.fetch();

collection.on('change', () => {
  console.log(collection);
});
