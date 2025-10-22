import { Console } from "@woowacourse/mission-utils";
import { RandomForward } from "./Random.js";

export async function Repeat(carList, count) {
  Console.print("\n실행 결과");

  for (let i = 0; i < (await count); i++) {
    RandomForward(carList);
    Console.print("\n");
  }
}
