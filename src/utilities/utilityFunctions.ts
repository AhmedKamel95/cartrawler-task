import alamoVendorLogo from "assets/Vendors/alamo.svg";
import avisVendorLogo from "assets/Vendors/avis.svg";
import hertzVendorLogo from "assets/Vendors/hertz.svg";

export const createUniqueId = (length?: number) => {
  const len: number = length || 8;
  const timestamp: number = +new Date();

  let uniqueId = "";

  const _getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const ts: string = timestamp.toString();
  const parts: string[] = ts.split("").reverse();

  for (let i = 0; i < len; ++i) {
    const index: number = _getRandomInt(0, parts.length - 1);
    uniqueId += parts[index];
  }

  return uniqueId;
};

export const getVehicleName = (str: string) => {
  return str.split(" ").slice(0, -2).join(" ");
};

export const extractSimilar = (str: string) => {
  return str.split(" ").slice(-2).join(" ");
};

export const getVendorLogo = (vendorCode: string) => {
  switch (vendorCode) {
    case "125":
      return alamoVendorLogo;
    case "1364":
      return avisVendorLogo;
    case "2338":
      return hertzVendorLogo;
    default:
      return "";
  }
};

export const isArrayHasData = <T = Array<any>>(arr: T) =>
  Array.isArray(arr) && !!arr.length;

export const isObjHasData = (obj: object | Record<string, any>) =>
  Boolean(obj) && typeof obj === "object" && !!Object.keys(obj).length;
