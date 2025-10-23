import { Car } from "./Car.js";
import { ValidateCarLength, ValidateCarSeparator } from "./validator.js";

export function Separate(names) {
  ValidateCarSeparator(names);
  const carNameList = names.split(",");

  const carObjectList = carNameList.map((name) => {
    ValidateCarLength(name);
    return new Car(name);
  });

  return carObjectList;
}
