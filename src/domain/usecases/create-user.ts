import { Coach, CoachProps } from "../entities/coach";
import { Student, StudentProps } from "../entities/student";

interface IData {
  dataStudent?: StudentProps;
  dataCoach?: CoachProps;
}
export class CreateUserUseCase {
  write({ dataStudent, dataCoach }: IData) {
    const user: Student | Coach = !!dataStudent
      ? new Student(dataStudent)
      : new Coach(dataCoach);

    return user;
  }
}
