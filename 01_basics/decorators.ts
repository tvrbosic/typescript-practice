class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('Something bad happened while boating!')
  pilot(): void {
    console.log('Swish!');
    throw new Error();
  }
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
