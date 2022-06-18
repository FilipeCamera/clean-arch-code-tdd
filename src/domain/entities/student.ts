import { User, UserProps } from "./user";

export type StudentProps = UserProps & {
  age: number;
  weight: number;
  height: number;
};

export class Student extends User {
  constructor(private readonly student: StudentProps) {
    super(student);
  }

  getAge() {
    return this.student.age;
  }

  getWeight() {
    return this.student.weight;
  }

  getHeight() {
    return this.student.height;
  }
}
