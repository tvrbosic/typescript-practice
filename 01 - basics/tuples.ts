const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Array of type string | boolean | number
// Elements can be swapped, still not a tuple
// const pepsi: [] = ['brown', true, 40]

// Type alias
type Drink = [string, boolean, number];

// Tuple
// const tuplePuple: [string, boolean, number] = ['brown', true, 40]
// Tuple using type alias
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];