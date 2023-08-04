@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Something bad happened while boating!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('Swish!');
    } else {
      console.log('Nothing happened!');
    }
    throw new Error();
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor): void {
    const method = descriptor.value;

    descriptor.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
