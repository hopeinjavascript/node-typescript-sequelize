import { CustomError } from "../types";

function setResponse(res: any) {
  return (msg: string, code?: number, data?: any ) => {
    res.message = msg;
    res.code = code;
    res.data = data;
  }
}

function throwError(msg: string, code?: number, data?: any): { [key: string]: any } {
  const errObj: CustomError = new Error(msg);
  errObj.code = code;
  if(data) {
    errObj.data = data;
  }
  // return errObj;
  return errObj;
}

function getObjectLength(obj: {}) {
  return obj.constructor.name === "Object" && Object.keys(obj).length
}

export default {
  setResponse,
  throwError,
  getObjectLength
}
