export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position++;
  }

  getPosition() {
    return this.position;
  }
}
