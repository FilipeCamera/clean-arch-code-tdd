import { User, UserProps } from "../entity/user";
import { CreateUserUseCase } from "./create-user";

describe("teste de cadastro", () => {
  test("criando usuário e verificando se está definido", () => {
    const data: UserProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    };
    const create = new CreateUserUseCase();
    const user = create.write(data);
    expect(user).toBeDefined();
  });
  test("verificando se o usuário tem o nome completo definido", () => {
    const data: UserProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    };
    const create = new CreateUserUseCase();
    const user = create.write(data);
    expect(user.getFullName()).toBeDefined();
  });
  test("verificando se o usuário a senha definida", () => {
    const data: UserProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    };
    const create = new CreateUserUseCase();
    const user = create.write(data);

    expect(user.getPassword()).toBeDefined();
  });
  test("verificando se o usuário tem o e-mail definido", () => {
    const data: UserProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    };
    const create = new CreateUserUseCase();
    const user = create.write(data);

    expect(user.getEmail()).toBeDefined();
  });
  test("verificando se o usuário tem o id definido", () => {
    const data: UserProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    };
    const create = new CreateUserUseCase();
    const user = create.write(data);

    expect(user.getId()).toBeDefined();
  });
});
