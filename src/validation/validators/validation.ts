export interface Validation {
  validate: (value: any) => true | Error;
}
