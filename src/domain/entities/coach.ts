import { User } from "./user";

export type Coach = User & {
  experience: string;
  formation: string;
  specs: string;
};
