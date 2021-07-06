const oranges: number = 5;

let speed = "fast";

let hasDog: boolean = true;
let nothing: null = null;
let nothing1: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "white"];
let numbers: number[] = [4, 3, 2];
let results: boolean[] = [true, false, true];

class Car {}
let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x":10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ["red", "green", "white"];

let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == "green") {
    isTwo = true;
  }
}

let myNumbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] > 0) {
    positiveNumber = myNumbers[i];
  }
}
