import { User, UserProps } from "./user";

export type CoachProps = UserProps & {
  experience: string;
  formation: string;
  specs: string;
};

export class Coach extends User {
  constructor(private readonly coach: CoachProps) {
    super(coach);
  }

  getExperience() {
    return this.coach.experience;
  }

  getFormation() {
    return this.coach.formation;
  }

  getSpecs() {
    return this.coach.specs;
  }
}
