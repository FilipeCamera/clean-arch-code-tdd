import { Coach, Student } from "../../domain/entities";
import { AddUser } from "../../domain/usecases";
import { DbUserRepositoryInterface } from "../repository";

export class LoadAddUser implements AddUser {
  constructor(private readonly dbUserRepository: DbUserRepositoryInterface) {}
  async add(user: AddUser.Params): Promise<AddUser.Result> {
    const res = await this.dbUserRepository.write(user);
    return res;
  }
}
