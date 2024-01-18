export const validateText = (str: string): boolean =>
  /^(?!\d+$)\S.{2,}$/.test(str);
