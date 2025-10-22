import { Console } from "@woowacourse/mission-utils";
import { Separate } from "./Separate.js";
import { Repeat } from "./Repeat.js";

class App {
  async run() {
    const carNames = Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carList = Separate(await carNames);

    const count = Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    Repeat(carList, await count);
  }
}

export default App;
