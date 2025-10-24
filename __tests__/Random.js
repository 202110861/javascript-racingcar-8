import { Console, Random } from "@woowacourse/mission-utils";
import { RandomForward } from "../src/Random.js";
import { Car } from "../src/Car.js";

describe("Random 함수 테스트", () => {
  let consoleSpy;
  let randomSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(Console, "print");
    randomSpy = jest.spyOn(Random, "pickNumberInRange");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("RandomForward 함수 테스트", () => {
    const carList = [new Car("pobi"), new Car("woni")];

    randomSpy.mockReturnValueOnce(4).mockReturnValueOnce(3);
    RandomForward(carList);

    expect(consoleSpy).toHaveBeenCalledWith("pobi : -");
    expect(consoleSpy).toHaveBeenCalledWith("woni : ");

    expect(randomSpy).toHaveBeenCalledTimes(2);
  });
});
