const colors: string[] = ["red", "green", "yellow"];

const dates = [new Date(), new Date()];

const fruitsByColor = [["tomato"], ["apple"], ["lemon"]];
const fruitsByColor1: string[][] = [];

const color = colors[0];

const color1 = colors.pop();

// colors.push(true)

colors.map((color: string): string => {
  return color.toUpperCase();
});

const importantDates: (string | Date)[] = [new Date(), "2020-11-11"];
// const importantDates = [new Date(), "2020-11-11"];
//! importantDates.push(10)