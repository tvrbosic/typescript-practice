import { View } from './View';
import { User, IUserProps } from '../models/User';

export class UserForm extends View<User, IUserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#saveBtn': this.saveClickHandler,
      'click:#changeNameBtn': this.changeNameClickHandler,
      'click:#randomAgeBtn': this.randomAgeClickHandler,
    };
  }

  saveClickHandler = (): void => {
    console.log('Hi there');
  };

  changeNameClickHandler = (): void => {
    const input = this.parent.querySelector('input');
    input?.value && this.model.set({ name: input.value });
  };

  randomAgeClickHandler = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
      <input />
      <button id="changeNameBtn">Change Name</button>
      <button id="randomAgeBtn">Set Random Age</button>
      <button id="saveBtn">Save</button>
    </div>`;
  }
}
