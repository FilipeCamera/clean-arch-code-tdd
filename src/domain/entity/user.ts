export type UserProps = {
  fullname: string;
  email: string;
  password: string;
};

export class User {
  private readonly id: string;

  constructor(private readonly data: UserProps) {
    this.id = Math.random().toString();
  }

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
