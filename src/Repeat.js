import { Console } from "@woowacourse/mission-utils";
import { RandomForward } from "./Random.js";
import { ValidateCarNumber } from "./validator.js";

/**
 *
 * @param {object} carList
 * @param {number} count
 */

export async function Repeat(carList, count) {
  ValidateCarNumber(await count);

  Console.print("\n실행 결과");

  for (let i = 0; i < (await count); i++) {
    RandomForward(carList);
    Console.print("\n");
  }
}
