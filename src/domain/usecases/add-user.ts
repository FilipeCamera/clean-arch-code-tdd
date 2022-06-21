import { Coach, Student } from "../entities";

export interface AddUser {
  add: (data: AddUser.Params) => Promise<AddUser.Result>;
}

export namespace AddUser {
  export type Params = Student | Coach;
  export type Result = Student | Coach;
}
