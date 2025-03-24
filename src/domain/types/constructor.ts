export type NonMethodKeys<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? never : P;
}[keyof T];
export type RemoveMethods<T> = Pick<T, NonMethodKeys<T>>;
