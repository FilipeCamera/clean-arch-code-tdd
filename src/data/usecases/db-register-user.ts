import { RegisterUser } from "../../domain/usecases";
import { DbUserRepositoryInterface } from "../repository";

export class DbRegisterUser implements RegisterUser {
  constructor(private readonly dbUserRepository: DbUserRepositoryInterface) {}
  async register(
    user: RegisterUser.Params
  ): Promise<RegisterUser.Result | Error> {
    if (!user || Object.keys(user).length === 0) {
      throw new Error("Nao foi possivel adicionar o usuario, campo vazio.");
    }
    const res = await this.dbUserRepository.write(user);
    return res;
  }
}
