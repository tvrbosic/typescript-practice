import 'reflect-metadata';

// #########  Initial demonstration of metadata #########
// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);
// console.log(height);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi there')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
