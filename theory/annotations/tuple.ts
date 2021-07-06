const drink = {
  color: "brown",
  carbonated: true,
  shugar: 40,
};
type Drink = [string, boolean, number];

const cola: [string, boolean, number] = ["brown", true, 40];
const cola1: Drink = ["brown", true, 40];

const sprite: Drink = ["clear", true, 50];

const carSpecs: [number, number] = [400, 3354]
