import { Console } from "@woowacourse/mission-utils";
import { Separate } from "./Separate.js";
import { RandomForward } from "./Random.js";

class App {
  async run() {
    const carNames = Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carList = Separate(await carNames);

    RandomForward(carList);
  }
}

export default App;
