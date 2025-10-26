import { Car } from "./Car.js";
import { ValidateCarLength, ValidateCarSeparator } from "./validator.js";

/**
 * 쉼표(,)를 기준으로 이름을 분리합니다.
 * - 분리한 이름으로 새로운 Car 객체를 생성합니다.
 *
 * @param {string} names
 * @returns Car[] 반환
 */

export function Separate(names) {
  ValidateCarSeparator(names);
  const carNameList = names.split(",");

  const carObjectList = carNameList.map((name) => {
    ValidateCarLength(name);
    return new Car(name);
  });

  return carObjectList;
}
