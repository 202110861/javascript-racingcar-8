import { Console } from "@woowacourse/mission-utils";

/**
 * 자동차의 현재 위치에 따라 우승자를 판단합니다.
 * - 가장 멀리 있는 위치를 찾습니다.
 * - 해당 위치에 있는 자동차 이름을 우승자 목록에 추가합니다.
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
