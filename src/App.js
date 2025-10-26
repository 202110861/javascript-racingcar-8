import { Console } from "@woowacourse/mission-utils";
import { Separate } from "./Separate.js";
import { Repeat } from "./Repeat.js";
import { Winner } from "./Winner.js";
import { INPUT_MESSAGE } from "./Constants.js";
import { ValidateCarNumber } from "./validator.js";

class App {
  async run() {
    const carNames = Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT);

    const carList = Separate(await carNames);

    const count = Console.readLineAsync(INPUT_MESSAGE.COUNT_INPUT);

    await Repeat(carList, count);
    Winner(carList);
  }
}

export default App;
