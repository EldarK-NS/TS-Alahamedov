class Vehicle {
  //   public drive(): void {
  //     console.log("I am driving");
  //   }
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(color: string) {}

  public stop(): void {
    console.log("I am stopped");
  }
  protected beep(): void {
    console.log("Beep!!!");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("i am a car and I am driving");
  }
  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle("black");
// console.log(vehicle.color);
// vehicle.drive();
// vehicle.stop();

const car = new Car(4, "green");
// car.startDrivingProcess();
// car.stop();
