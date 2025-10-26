import { Random, Console } from "@woowacourse/mission-utils";

/**
 * 0~9사이의 랜덤 값이 4 이상인 경우 앞으로 전진합니다.
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
