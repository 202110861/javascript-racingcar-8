import { Console } from "@woowacourse/mission-utils";
import { RandomForward } from "./Random.js";

export function Repeat() {
  const count = Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  for (let i = 0; i < count; i++) {
    RandomForward(carList);
  }
}
