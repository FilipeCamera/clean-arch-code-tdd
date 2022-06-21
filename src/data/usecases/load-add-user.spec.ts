import { Student, Coach } from "../../domain/entities";
import { DbUserRepository } from "../repository";
import { LoadAddUser } from "./load-add-user";

describe("teste de criacao de usuario", () => {
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
    const loadAddUser = new LoadAddUser(database);

    const result = await loadAddUser.add(student);

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
});
