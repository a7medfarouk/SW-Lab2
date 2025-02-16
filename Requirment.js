/*IMPORTANT NOTES
1- you are using JS Name Casing (camelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class point {
  constructor(coordinateX, coordinateY) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) 
    {
      throw Error("invalid Width and Height"); // throws an error in case of width or height <= 0
    }

    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  // ***************
  // METHODS
  // ***************

  area() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  updateMyHeight(height) {
    if (height && height > 0) {
      this.height = height;
    }
  }

  update({ startingPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in case of width or height <= 0
    }

    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  fetchHeight() {
    return this.height;
  }

  //function that print the endpoints
  endPoints() {
    const topRight = this.startingPoint.coordinateX + this.broad;
    const bottomLeft = this.startingPoint.coordinateY + this.height;

    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  getWidth() {
    return this.width;
  }
}

function buildObject(Width, x, Height, y) {
  const mainPoint = new point(x, y);
  const rect = new Rectangle(mainPoint, Width, Height);
  return rect;
}

function constructSquare(coordinateX, coordinateY, squareHeight) {
  let square;

  if (!squareHeight || squareHeight <= 0) {
    square = buildObject(squareHeight, coordinateX, squareHeight, coordinateY);
  }

  const squareArea = square.area();
  const squarePerimeter = square.calculatePerimeter();

  console.log("square Area ", squareArea);
  console.log("square Perimeter ", squarePerimeter);
}

const myRect = buildObject(2, 3, 5, 4);
const mySquare = construct_Square();

console.log(mySquare.calculatePerimeter());
mySquare.endPoints();
myRect.updateMyHeight(3);
