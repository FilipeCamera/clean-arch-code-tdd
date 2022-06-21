import { Student, Coach } from "../../domain/entities";

export interface DbUserRepositoryInterface {
  write: (user: Student | Coach) => Promise<Student | Coach>;
}

export class DbUserRepository implements DbUserRepositoryInterface {
  private database: Array<Student | Coach> = [];
  async write(user: Student | Coach): Promise<Student | Coach> {
    this.database.push(user);
    return user;
  }
}
