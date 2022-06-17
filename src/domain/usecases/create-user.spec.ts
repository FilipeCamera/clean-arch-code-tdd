describe("teste de cadastro", () => {
  test("criando usuário", () => {
    const user = new User();

    expect(user.fullname).toBe("Alana Miranda");
  });
});
