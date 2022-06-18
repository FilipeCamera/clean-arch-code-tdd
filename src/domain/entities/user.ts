export type UserProps = {
  fullname: string;
  email: string;
  password: string;
};

export class User {
  private readonly id: string = Math.random().toString();

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

  getId() {
    return this.id;
  }
}
