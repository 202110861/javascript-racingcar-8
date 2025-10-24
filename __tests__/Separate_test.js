import { Separate } from "../src/Separate.js";

describe("Separate 함수 테스트", () => {
  test("자동차 이름 분리해서 Car 객체 생성", () => {
    const carNames = "pobi,woni";
    const carList = Separate(carNames);

    expect(carList).toHaveLength(2);
    expect(carList[0].name).toBe("pobi");
    expect(carList[1].name).toBe("woni");
  });

  test("", () => {});
});
