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
