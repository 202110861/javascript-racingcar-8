import { Console, Random } from "@woowacourse/mission-utils";
import { Repeat } from "../src/Repeat.js";
import { Car } from "../src/Car.js";

describe("Repeat 함수 테스트", () => {
  let consoleSpy;
  let randomSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(Console, "print");
    randomSpy = jest.spyOn(Random, "pickNumberInRange");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("count = 1일 때 한 번만 동작하는지 테스트", async () => {
    const carList = [new Car("pobi"), new Car("woni")];
    const count = 1;

    randomSpy.mockReturnValueOnce(4).mockReturnValueOnce(3);

    await Repeat(carList, count);

    expect(consoleSpy).toHaveBeenCalledWith("\n실행 결과");

    expect(randomSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith("pobi : -");
    expect(consoleSpy).toHaveBeenCalledWith("woni : ");
    expect(consoleSpy).toHaveBeenCalledWith("\n");

    expect(consoleSpy).toHaveBeenCalledTimes(4);
  });
});
