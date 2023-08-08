// ################################## Objects ##################################
const profile = {
  age: 20, 
  firstName: 'Alex',
  coords: {
    lat: 0,
    long: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age, firstName }: { age: number; firstName: string } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;