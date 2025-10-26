import { Random, Console } from "@woowacourse/mission-utils";

/**
 *
 * @param {object} carList
 */

export function RandomForward(carList) {
  carList.forEach((car) => {
    const RandomNumber = Random.pickNumberInRange(0, 9);

    if (RandomNumber >= 4) {
      car.move();
    }

    Console.print(`${car.name} : ${"-".repeat(car.getPosition())}`);
  });
}
