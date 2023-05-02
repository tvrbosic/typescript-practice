// ################################## Arrays ##################################
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['F150'], ['Corolla'], ['Camaro']];

// TypeScript will help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// TypeScript will prevent incompatible values
carMakers.push(100);

// TypeScript will help with 'map'
carMakers.map((car: string): string => {
  // Automatically offers autocomplete string methods due to function return type
  return car.toUpperCase();
});

// --------------------------- Flexible types ---------------------------
// Array of infered type: Date | string
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
