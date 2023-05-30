import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

const rootUrl = 'http://localhost:3001/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl);
  public attributes: Attributes<IUserProps>;

  constructor(private data: IUserProps) {
    this.attributes = new Attributes<IUserProps>(data);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
