import { Coach, Student } from "../entities";

export interface CreateUser {
  write: (data: CreateUser.Params) => Promise<CreateUser.Result | Error>;
}

export namespace CreateUser {
  export type Params = {
    student?: Student;
    coach?: Coach;
  };
  export type Result = Coach | Student;
}
