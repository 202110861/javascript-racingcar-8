import { Random } from "@woowacourse/mission-utils";

export function RandomForward(carList) {
  carList.forEach((car) => {
    const RandomNumber = Random.pickNumberInRange(0, 9);

    if (RandomNumber >= 4) {
      car.move();
    }

    console.log(`${car.name} : `, "-".repeat(car.getPosition()));
  });
}
