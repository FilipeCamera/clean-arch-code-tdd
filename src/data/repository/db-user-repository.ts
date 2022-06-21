import { Student, Coach } from "../../domain/entities";

export interface DbUserRepositoryInterface {
  write: (user: Student | Coach) => Promise<Student | Coach>;
}

export class DbUserRepository implements DbUserRepositoryInterface {
  private database: Array<Student | Coach> = [];
  async write(user: Student | Coach): Promise<Student | Coach> {
    if (!user) {
      throw new Error("Nao foi possivel armazenar o usuario");
    }

    this.database.push(user);
    return user;
  }
}
