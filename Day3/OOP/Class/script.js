class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} car started`);
  }
}

let myCar = new Car("blue", "Honda");
myCar.start(); // Honda car started
