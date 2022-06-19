import { Coach, Student } from "../domain/models";
import { SaveUserRepositoryInterface } from "./repository";

export class SaveUserMemory implements SaveUserRepositoryInterface {
  private memory: Array<Coach | Student> = [];
  async insert(user: Coach | Student): Promise<Boolean | Error> {
    if (user) {
      this.memory.push(user);
      return true;
    }
    throw new Error("Nao foi possivel salvar o usuario");
  }
  async load(): Promise<Array<Coach | Student>> {
    return this.memory;
  }
}
