import { Coach, Student } from "../../domain/entities";
import { AddUser } from "../../domain/usecases";

export class LoadAddUser implements AddUser {
  private users: Array<Student | Coach> = [];
  async write(data: AddUser.Params): Promise<AddUser.Result | Error> {
    const { student, coach } = data;
    const user = student || coach;

    if (user) {
      this.users.push(user);
      return this.users.length > 0;
    }
    throw new Error("Nao foi possivel adicionar o usuario");
  }
  async load(): Promise<Array<Student | Coach>> {
    return this.users;
  }
}
