import { Student } from "../../domain/entities";
import { DbUserRepository } from "../repository";
import { DbRegisterUser } from "./db-register-user";

describe("teste de registrar o usuario no banco", () => {
  test("armazenando usuario no banco de dados e verificando se retorna o usuario", async () => {
    const student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "123",
      age: 22,
      weight: 54,
      height: 169,
      sex: "man",
    };
    const database = new DbUserRepository();
    const dbRegisterUser = new DbRegisterUser(database);

    const result = await dbRegisterUser.register(student);

    expect(result).toStrictEqual({
      fullname: "teste",
      email: "teste@email.com",
      password: "123",
      age: 22,
      weight: 54,
      height: 169,
      sex: "man",
    });
  });
  test("verificando se retorna um erro caso vai um objeto vazio", async () => {
    const student = {};
    const database = new DbUserRepository();
    const dbRegisterUser = new DbRegisterUser(database);

    await expect(dbRegisterUser.register(student as Student)).rejects.toThrow(
      "Nao foi possivel adicionar o usuario, campo vazio."
    );
  });
});
