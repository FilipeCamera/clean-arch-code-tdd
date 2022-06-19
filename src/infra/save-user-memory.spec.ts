import { CreateUserUseCase, ICreateUser } from "../domain/usecases/create-user";
import { SaveUserMemory } from "./save-user-memory";

describe("teste de salvar o usuario", () => {
  test("inserido usuario no banco de dados", async () => {
    const student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "teste",
      age: 22,
      weight: 55,
      height: 168,
    };
    const create = new CreateUserUseCase();
    const user = await create.write({ student });
    const sut = new SaveUserMemory();

    expect(await sut.insert(user as ICreateUser.Result)).toBe(true);
  });
  test("llendo o banco de dados e retornando os usuarios", async () => {
    const student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "teste",
      age: 22,
      weight: 55,
      height: 168,
    };
    const create = new CreateUserUseCase();
    const user = await create.write({ student });
    const sut = new SaveUserMemory();
    await sut.insert(user as ICreateUser.Result);
    expect(await sut.load()).toContain(user);
  });
});
