export const requiredField = (value) => {
  if (value) return undefined;

  return "Поле обязательно к заполнению";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `Максимальная длинна - ${maxLength} символов`;
  return undefined;
};
