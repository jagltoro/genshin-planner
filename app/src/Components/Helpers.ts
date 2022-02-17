export const getKeyValue =
  (key: number | string) => (obj: Record<string, any>) =>
    obj[key];
