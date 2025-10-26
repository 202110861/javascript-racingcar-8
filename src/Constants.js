export const INPUT_MESSAGE = {
  CAR_NAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  COUNT_INPUT: "시도할 횟수는 몇 회인가요?\n",
};

export const ERROR_MESSAGE = {
  CAR: {
    ERROR_CAR_NAME_TOO_LONG: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
    ERROR_CAR_NAME_EMPTY: "[ERROR] 자동차 이름은 빈 값이 될 수 없습니다.",
    ERROR_CAR_NAME_DELIMITER_INVALID:
      "[ERROR] 자동차 이름 구분자는 쉼표(,)를 사용해야 합니다.",
  },

  COUNT: {
    ERROR_ATTEMPT_LESS_THAN_ONE:
      "[ERROR] 반복 횟수는 1 이상으로 입력해야 합니다.",
    ERROR_ATTEMPT_NOT_A_NUMBER: "[ERROR] 반복 횟수는 숫자로 입력해야 합니다.",
    ERROR_ATTEMPT_NOT_INTEGER: "[ERROR] 반복 횟수는 정수로 입력해야 합니다.",
  },
};
