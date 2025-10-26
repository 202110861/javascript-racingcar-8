import { ERROR_MESSAGE } from "./Constants";

export function ValidateCarLength(carName) {
  if (carName.length > 5) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_TOO_LONG);
  } else if (carName.length === 0) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_EMPTY);
  }
}

/**
 *
 * @param {string}} carName
 */

export function ValidateCarSeparator(carName) {
  if (!carName.includes(",")) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_DELIMITER_INVALID);
  }
}

export function ValidateCarNumber(count) {
  if (count <= 0) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_LESS_THAN_ONE);
  } else if (isNaN(Number(count))) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_NOT_A_NUMBER);
  } else if (!Number.isInteger(Number(count))) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_NOT_INTEGER);
  }
}
