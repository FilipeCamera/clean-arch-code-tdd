import { ICreateUser } from "../../domain/usecases/create-user";

export interface SaveUserRepositoryInterface {
  insert: (user: ICreateUser.Result) => Promise<Boolean | Error>;
  load: () => Promise<Array<ICreateUser.Result>>;
}
