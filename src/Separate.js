import { Car } from "./Car.js";

export function Separate(names) {
  const carNameList = names.split(",");

  const carObjectList = carNameList.map((name) => {
    return new Car(name);
  });

  return carObjectList;
}
