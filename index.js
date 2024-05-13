// having subclasses to use this abstract in order to create the entity to become a car
class Car {
  #name;
  #speed;

  constructor(name) {
    // if the instantiated object is from this class
    // then throw the error
    if (this.constructor.name === "Car") {
      throw new Error("cannot instantiate the abstract class.");
    }

    this.#name = name;
    this.#speed = 0;

    // another option to enforce subclass to implement accelerate
    // if (this.accelerate === undefined) {
    //   throw new Error("all subclasses must implement accelerate method.");
    // }
  }

  get name() {
    return this.#name;
  }

  get speed() {
    return this.#speed;
  }

  set speed(value) {
    this.#speed = value;
  }

  accelerate() {
    throw new Error("all subclasses must implement accelerate method.");
  }

  brake() {
    throw new Error("all subclasses must implement brake method.");
  }
}

class Audi extends Car {
  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is running at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.name} is slowing down to ${this.speed} km/h.`);
  }
}

class Sportage extends Car {
  accelerate() {
    this.speed += 5;
    console.log(`${this.name} is running at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} is slowing down to ${this.speed} km/h.`);
  }
}

const car1 = new Audi("audi");
const car2 = new Sportage("sportage");
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
