import { Console } from "@woowacourse/mission-utils";

export async function Winner(carList) {
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

  console.log("winnerList : ", winnerList);

  Console.print(`최종 우승자 : ${winnerList.join(", ")}`);
}
