import { Coach, Student } from "../entities";

export interface AddUser {
  write: (data: AddUser.Params) => Promise<AddUser.Result | Error>;
  load: () => Promise<Array<Student | Coach>>;
}

export namespace AddUser {
  export type Params = {
    student?: Student;
    coach?: Coach;
  };
  export type Result = Boolean;
}
