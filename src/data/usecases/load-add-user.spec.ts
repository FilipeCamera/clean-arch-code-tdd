import { Student, Coach } from "../../domain/entities";
import { LoadAddUser } from "./load-add-user";

describe("teste de criacao de usuario", () => {
  test("armazenando usuario no banco de dados e verificando se foi armazenado", async () => {
    const student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "123",
      age: 22,
      weight: 54,
      height: 169,
      sex: "man",
    };

    const loadAddUser = new LoadAddUser();

    const result = await loadAddUser.write({ student });

    expect(result).toBe(true);
  });
  test("verificando se o usuario armazenado e um aluno", async () => {
    const student: Student = {
      fullname: "teste",
      email: "teste@email.com",
      password: "123",
      age: 22,
      weight: 54,
      height: 169,
      sex: "man",
    };

    const loadAddUser = new LoadAddUser();

    await loadAddUser.write({ student });

    const users = await loadAddUser.load();

    expect(users).toContain(student);
  });
  test("verificando se o usuario armazenado e um treinador", async () => {
    const coach: Coach = {
      fullname: "teste",
      email: "teste@email.com",
      password: "123",
      formation: "teste",
      specs: "teste",
      experience: "teste",
    };

    const loadAddUser = new LoadAddUser();

    await loadAddUser.write({ coach });

    const users = await loadAddUser.load();

    expect(users).toContain(coach);
  });
  test("verificando se retorna um caso o parametro vai vazio", async () => {
    const loadAddUser = new LoadAddUser();

    await expect(loadAddUser.write({})).rejects.toThrow(
      "Nao foi possivel adicionar o usuario"
    );
  });
});
