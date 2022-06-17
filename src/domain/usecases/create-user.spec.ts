type UserProps = {
  fullname: string;
  email: string;
  password: string;
};

class User {
  constructor(private readonly data: UserProps) {}

  getFullName() {
    return this.data.fullname;
  }

  getEmail() {
    return this.data.email;
  }

  getPassword() {
    return this.data.password;
  }
}

describe("teste de cadastro", () => {
  test("criando usuário e verificando se está definido", () => {
    const user = new User({
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    });
    expect(user).toBeDefined();
  });
  test("criando usuário com os dados preenchidos", () => {
    const user = new User({
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    });
    const data = {
      fullname: user.getFullName(),
      email: user.getEmail(),
      password: user.getPassword(),
    };

    expect(data).toStrictEqual({
      fullname: "Alana Miranda",
      email: "alana@email.com",
      password: "123",
    });
  });
});
