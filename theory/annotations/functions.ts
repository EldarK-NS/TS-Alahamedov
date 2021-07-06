const add = (a: number, b: number) => {
  return a + b;
};

// console.log(add(5, 6));

function divide(a: number, b: number): number {
  return a / b;
}

const myltiply = function (a: number, b: number): number {
  return a * b;
};

const logo = (message: string): void => {
  console.log(message);
};

const frowError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forcast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({date, weather,}: { date: Date; weather: string;}): void => {
  console.log(date, weather);
};
// const logWeather = ({ date, weather }): void => {
//   console.log(date, weather);
// };


