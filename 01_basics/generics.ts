// ################################## Generics ##################################
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

function printArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Type inference with generics
/*
const arr = new ArrayOfAnything(['a', 'b', 'c']);
printArray(arr.collection);
*/

// Recommended approach of using generics (specify type)
const arr = new ArrayOfAnything<string>(['a', 'b', 'c']);
printArray<string>(['a', 'b', 'c']);

// --------------------------- Generic constraints ---------------------------
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);
