import { Coach, CoachProps, Student, StudentProps, User } from "../models";

export interface ICreateUser {
  write: (data: ICreateUser.Params) => Promise<ICreateUser.Result>;
}

export class CreateUserUseCase implements ICreateUser {
  async write({
    student,
    coach,
  }: ICreateUser.Params): Promise<ICreateUser.Result> {
    if (student) {
      const user = new Student(student);
      return user;
    }
    if (coach) {
      const user = new Student(student);
      return user;
    }
    throw new Error("nenhum campo foi preenchido, erro ao criar usuário");
  }
}

export namespace ICreateUser {
  export type Params = {
    student?: StudentProps;
    coach?: CoachProps;
  };
  export type Result = Coach | Student;
}
