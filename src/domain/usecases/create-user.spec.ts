import { Student, User } from "../models";
import { CreateUserUseCase } from "./create-user";

describe("teste de criação de usuário", () => {
  test("criando usuário com perfil estudante", async () => {
    const student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "teste",
      age: 22,
      weight: 55,
      height: 168,
    };
    const sut = new CreateUserUseCase();

    const user = await sut.write({ student });

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Student);
  });
  test("criando usuário com perfil treinador", async () => {
    const coach = {
      fullname: "teste",
      email: "teste@email.com",
      password: "teste",
      formation: "teste",
      specs: "teste",
      experience: "teste",
    };
    const sut = new CreateUserUseCase();

    const user = await sut.write({ coach });

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Student);
  });
});
