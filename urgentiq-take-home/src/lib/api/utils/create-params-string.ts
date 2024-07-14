export const createParamsString = (paramsObject: {
  [key: string]: string | number;
}) => {
  let paramsString = "?";

  for (const key in paramsObject) {
    const value = paramsObject[key];
    paramsString =
      paramsString + `${key === "name" ? "search" : key}=${value}&`;
  }

  return paramsString === "?" ? "" : paramsString;
};
