class Shape {
  constructor() {
    if (this.constructor.name === "Shape") {
      throw new Error("cannot instantiate abstract class.");
    }
  }

  area() {
    throw new Error("All subclasses must implement area method.");
  }
}

class Circle extends Shape {
  area() {
    console.log("Calculating area for circle based on the radius");
    Math.PI * radius ** 2; // radius^2
  }
}
class Rectangle extends Shape {
  area() {
    // width * height
  }
}
class Triangle extends Shape {
  area() {
    // width * height / 2
  }
}

const circle1 = new Shape();
circle1.area();
