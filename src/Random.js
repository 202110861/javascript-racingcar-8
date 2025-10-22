import { Random } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";

export function RandomForward(CarList) {
  CarList.forEach((car) => {
    const carObject = new Car(car);
    const RandomNumber = Random.pickNumberInRange(0, 9);

    if (RandomNumber >= 4) {
      carObject.move();
    }

    console.log(`${carObject.name} : `, "-".repeat(carObject.getPosition()));
  });
}
