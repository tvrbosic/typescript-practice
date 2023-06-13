import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3001/users';

export class User extends Model<IUserProps> {
  static buildUser(attrs: IUserProps): User {
    return new User(
      new Attributes<IUserProps>(attrs),
      new Eventing(),
      new ApiSync<IUserProps>(rootUrl)
    );
  }
}
