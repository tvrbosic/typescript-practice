// ########################### CLASSES ###########################
/**
 * Following code has example of class inheritance, object instantiation, field and method modifiers (public, private, protected)
 * 
 * NOTE: Using interfaces and classes gives us really strong code reuse in TS!
 */
class Vehicle {
  // color: string = 'Red';
  // constructor(vehicleColor: string) {
  //   this.color = vehicleColor;
  // }

  // Shortened version of constructor + variable declaration/initialization
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep!');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('Vroom vroom!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();

const car = new Car('Orange', 4);
console.log(`Car color: ${car.color}`);
console.log(`Number of wheels: ${car.wheels}`);
car.startDrivingProcess();
