// ########################### INTERFACES ###########################
/*
Interface creates a new type, describing the property names and value types of an object.
*/
interface Reportable {
  summary(): string;
}

const car1 = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink1 = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (obj: Reportable): void => {
  console.log(obj.summary());
};

printSummary(car1);
printSummary(drink1);
