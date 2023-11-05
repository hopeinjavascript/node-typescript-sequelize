interface CustomError extends Error {
  code?: number;
}

function err(msg: string, code: number): { [key: string]: any } {
  const errObj: CustomError = new Error(msg);
  errObj.code = code;
  return errObj;
}
