import { View } from './View';
import { User, IUserProps } from '../models/User';

export class UserEdit extends View<User, IUserProps> {
  template(): string {
    return `
      <div>
        <div id="userShow"></div>
        <div id="userForm"></div>
      </div>`;
  }
}
