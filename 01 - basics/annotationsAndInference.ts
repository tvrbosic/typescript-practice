// ############################## TYPE ANNOTATIONS ##############################
// ---------------------------------- Variables ---------------------------------
const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothinMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// ---------------------------------- Array ---------------------------------
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// ---------------------------------- Class ---------------------------------
class Car {
  /* Constructor, methods, attributes ... */
}

let car: Car = new Car();

// ---------------------------------- Object ---------------------------------
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// ---------------------------------- Function ---------------------------------
const logNumber: (n: number) => void = (n) => {
  console.log(n);
};

// ############################## TYPE INFERENCE ##############################
/**
 * Type inference system automatically detects type of variable
 * It will work if variable declaration and initialization are on the same line
 */

let oranges = 12; // let:oranges:number

let someVariable; // let someVariable: any

// ############################## WHEN TO USE ##############################
/**
 * Type annotations:
 * 1. When a function returns the 'any' type and we need to clarify the value
 * 2. When we declare a variable on one line then initialize it later
 * 3. When we want a variable to have a type that can't be inferred
 *
 * Type inference: WHENEVER ABLE
 */

// EXAMPLE: Function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json); // coordinates: any => because JSON.parse returns 'any' type
console.log(coordinates); // {x: 10, y: 20}
// SOLUTION: const coordinates: { x: number, y: number } = JSON.parse(json);

// EXAMPLE: We declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Can't be inferred

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// EXAMPLE: We want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
// Type inference will not work correctly on next line (possible multiple value types)
let numberAboveZero: boolean | number = false; // Value can be of two types: boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
