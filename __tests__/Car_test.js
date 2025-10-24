import { Car } from "../src/Car.js";

describe("Car 클래스", () => {
  test("move 메서드 테스트", () => {
    const car = new Car("pobi");
    car.move();

    expect(car.getPosition()).toBe(1);
  });

  test("getPosition 메서드 테스트", () => {
    const car = new Car("pobi");
    const position = car.getPosition();

    expect(position).toBe(0);
  });
});
