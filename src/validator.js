import { ERROR_MESSAGE } from "./Constants";

/**
 * 이름 길이와 관련된 유효성 검사를 합니다.
 * - 길이가 5 초과인 경우
 * - 길이가 0인 경우
 *
 * @param {string} carName
 */

export function ValidateCarLength(carName) {
  if (carName.length > 5) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_TOO_LONG);
  } else if (carName.length === 0) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_EMPTY);
  }
}

/**
 * 구분자에 대한 유효성 검사를 합니다.
 * - 구분자가 쉼표(,)가 아닌 경우
 *
 * @param {string}} carName
 */

export function ValidateCarSeparator(carName) {
  if (!carName.includes(",")) {
    throw new Error(ERROR_MESSAGE.CAR.ERROR_CAR_NAME_DELIMITER_INVALID);
  }
}

/**
 * 반복 횟수에 대한 유효성 검사를 합니다.
 * - 음수인 경우
 * - 숫자가 아닌 경우
 * - 정수가 아닌 경우
 *
 * @param {number} count
 */
export function ValidateCarNumber(count) {
  if (count <= 0) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_LESS_THAN_ONE);
  } else if (isNaN(Number(count))) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_NOT_A_NUMBER);
  } else if (!Number.isInteger(Number(count))) {
    throw new Error(ERROR_MESSAGE.COUNT.ERROR_ATTEMPT_NOT_INTEGER);
  }
}
