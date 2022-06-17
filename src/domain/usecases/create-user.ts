import { User, UserProps } from "../entity/user";

export class CreateUserUseCase {
  write(data: UserProps) {
    if (!data) throw new Error("data is not found");

    const user = new User(data);

    return user;
  }
}
