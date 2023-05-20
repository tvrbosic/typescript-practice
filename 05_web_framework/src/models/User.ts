import axios, { AxiosResponse } from 'axios';

interface IUserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: IUserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // Use existing array of callbacks or create a new one
    const handlers = this.events[eventName] || [];
    // Add new callback to array
    handlers.push(callback);
    // Update object with new array of callbacks
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    // Get array of callbacks for given event name
    const handlers = this.events[eventName];
    // If no callbacks, exit
    if (!handlers || handlers.length === 0) {
      return;
    }
    // Invoke each callback
    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3001/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3001/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:3001/users}`, this.data);
    }
  }
}
