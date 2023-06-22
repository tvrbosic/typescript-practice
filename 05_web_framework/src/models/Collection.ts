import axios, { AxiosResponse } from 'axios';

import { User, IUserProps } from './User';
import { Events } from './Events';

export class Collection {
  models: User[] = [];
  events: Events = new Events();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(`${this.rootUrl}/users`).then((res: AxiosResponse) => {
      console.log(res.data);
      res.data.forEach((value: IUserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger('change');
    });
  }
}
