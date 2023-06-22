type Callback = () => void;

export class Events {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // Use existing array of callbacks or create a new one
    const handlers = this.events[eventName] || [];
    // Add new callback to array
    handlers.push(callback);
    // Update object with new array of callbacks
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
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
  };
}
