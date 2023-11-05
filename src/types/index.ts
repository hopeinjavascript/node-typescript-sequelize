export interface MyError extends Error {
  code?: number;
  data?: string | any;
}

export interface MyResponse extends Response {
  serviceName?: string;
  data?: any;
  code?: number;
  message?: string;
}
