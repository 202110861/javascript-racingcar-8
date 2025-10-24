import { Console } from "@woowacourse/mission-utils";
import { Winner } from "../src/Winner.js";
import { Car } from "../src/Car.js";

describe("Winner 함수 테스트", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(Console, "print");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("최종우승자 1명일 때 출력 테스트", () => {
    const carList = [new Car("pobi"), new Car("woni")];

    carList[0].move();

    Winner(carList);

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  test("최종우승자 2명일 때 출력 테스트", () => {
    const carList = [new Car("pobi"), new Car("woni")];

    carList[0].move();
    carList[1].move();

    Winner(carList);

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });
});
