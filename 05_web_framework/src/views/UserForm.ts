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
    this.model.save();
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
      <input placeholder="${this.model.get('name')}" />
      <button id="changeNameBtn">Change Name</button>
      <button id="randomAgeBtn">Set Random Age</button>
      <button id="saveBtn">Save</button>
    </div>`;
  }
}
