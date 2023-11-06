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

export type Data = {
  name: string,
  address: string,
  vegOnly: boolean,
  cost: string,
  cuisineTypes: string[],
  isOpen: boolean,
}
