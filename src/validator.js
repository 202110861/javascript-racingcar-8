export function ValidateCarLength(carName) {
  if (carName.length > 5) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  } else if (carName.length === 0) {
    throw new Error("[ERROR] 자동차 이름은 빈 값이 될 수 없습니다.");
  }
}

/**
 *
 * @param {string}} carName
 */

export function ValidateCarSeparator(carName) {
  if (!carName.includes(",")) {
    throw new Error("[ERROR] 자동차 이름 구분자는 쉼표(,)를 사용해야 합니다.");
  }
}

export function ValidateCarNumber(count) {
  if (count <= 0) {
    throw new Error("[ERROR] 반복 횟수는 1 이상으로 입력해야 합니다.");
  } else if (isNaN(Number(count))) {
    throw new Error("[ERROR] 반복 횟수는 숫자로 입력해야 합니다.");
  } else if (!Number.isInteger(Number(count))) {
    throw new Error("[ERROR] 반복 횟수는 정수로 입력해야 합니다.");
  }
}
