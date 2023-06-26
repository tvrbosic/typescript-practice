import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
