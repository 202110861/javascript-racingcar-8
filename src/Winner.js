import { Console } from "@woowacourse/mission-utils";

/**
 *
 * @param {object} carList
 */

export async function Winner(carList) {
  console.log(typeof carList);

  let maxPosition = 0;
  const winnerList = [];

  carList.forEach((car) => {
    if (car.getPosition() > maxPosition) {
      maxPosition = car.getPosition();
    }
  });

  carList.forEach((car) => {
    if (car.getPosition() === maxPosition) {
      winnerList.push(car.name);
    }
  });

  Console.print(`최종 우승자 : ${winnerList.join(", ")}`);
}
