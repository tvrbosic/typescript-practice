// ############################## TYPE ANNOTATIONS ##############################
/**
 * We  define what type of arguments a function will receive and what type of 
 * values it will return.
 * /
// ############################## TYPE INFERENCE ##############################
/**
 * Only works for return value. TypeScript will try to figure out what type of
 * value a function will return. Does not work for function parameters.
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return undefined; // Allowed
  // return 'Any value type different than undefined'; /// Not allowed
};

const throwError = (message: string): never => {
  // We will never reach end of function due to error
  throw new Error(message);
  // For that reason function return type is defined as <never>
};

// ##################### Destructring and Annotations #####################
const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);