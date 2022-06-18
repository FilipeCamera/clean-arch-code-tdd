import { Coach, CoachProps } from "../entities/coach";
import { Student, StudentProps } from "../entities/student";
import { User, UserProps } from "../entities/user";
import { CreateUserUseCase } from "./create-user";

describe("teste de criação de usuário e perfil", () => {
  test("criando usuário aluno", () => {
    const dataStudent: StudentProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
      age: 22,
      weight: 54,
      height: 169,
    };
    const create = new CreateUserUseCase();
    const user = create.write({ dataStudent });
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Student);
  });
  test("criando usuário treinador", () => {
    const dataCoach: CoachProps = {
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
      experience: "teste",
      formation: "teste",
      specs: "teste",
    };
    const create = new CreateUserUseCase();
    const user = create.write({ dataCoach });
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(Coach);
  });
});
