import {
  ValidateCarLength,
  ValidateCarSeparator,
  ValidateCarNumber,
} from "../src/validator.js";

describe("ValidateCarLength 함수 테스트", () => {
  test("carName이 5자 초과일 때", () => {
    const carName = "abcdef";
    expect(() => ValidateCarLength(carName)).toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });
  test("carName이 빈 값일 때", () => {
    const carName = "";
    expect(() => ValidateCarLength(carName)).toThrow(
      "[ERROR] 자동차 이름은 빈 값이 될 수 없습니다."
    );
  });
});

describe("ValidateCarSeparator 함수 테스트", () => {
  test("carName에 쉼표(,)가 아닌 다른 문자가 있을 때", () => {
    const carName = "pobi/woni";
    expect(() => ValidateCarSeparator(carName)).toThrow(
      "[ERROR] 자동차 이름 구분자는 쉼표(,)를 사용해야 합니다."
    );
  });
});

describe("ValidateCarNumber 함수 테스트", () => {
  test("count가 0 이하일 때", () => {
    const count = 0;
    expect(() => ValidateCarNumber(count)).toThrow(
      "[ERROR] 반복 횟수는 1 이상으로 입력해야 합니다."
    );
  });

  test("count가 정수가 아닐 때", () => {
    const count = 1.5;
    expect(() => ValidateCarNumber(count)).toThrow(
      "[ERROR] 반복 횟수는 정수로 입력해야 합니다."
    );
  });

  test("count가 숫자가 아닐 때", () => {
    const count = "abc";
    expect(() => ValidateCarNumber(count)).toThrow(
      "[ERROR] 반복 횟수는 숫자로 입력해야 합니다."
    );
  });
});
