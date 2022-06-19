import { EmailValidator } from "../protocols";
import { Validation } from "./validation";

export class EmailValidation implements Validation {
  constructor(private readonly EmailValidator: EmailValidator) {}
  validate(input: any): true | Error {
    const isValid = this.EmailValidator.isValid(input);

    if (!isValid) {
      throw new Error("E-mail invalido");
    }

    return true;
  }
}
