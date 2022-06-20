import { User } from "./user";

export type Student = User & {
  age: number;
  weight: number;
  height: number;
};
