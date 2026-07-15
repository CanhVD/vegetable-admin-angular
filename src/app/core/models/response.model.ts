export interface BaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export interface BasePageResponse<T> {
  code: number;
  msg: string;
  data: {
    result: T[];
    total: number;
  };
}