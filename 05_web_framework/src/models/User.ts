import { Model } from './Model';
import { Attributes } from './Attributes';
import { Events } from './Events';
import { ApiSync } from './ApiSync';

export interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3001/users';

export class User extends Model<IUserProps> {
  static buildUser(attrs: IUserProps): User {
    return new User(
      new Attributes<IUserProps>(attrs),
      new Events(),
      new ApiSync<IUserProps>(rootUrl)
    );
  }
}
