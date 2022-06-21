import { Coach, Student } from "../entities";

export interface RegisterUser {
  register: (data: RegisterUser.Params) => Promise<RegisterUser.Result | Error>;
}

export namespace RegisterUser {
  export type Params = Student | Coach;
  export type Result = Student | Coach;
}
