interface User {
  name: string;
}
interface UserConstructor {
  new (name: string): User;
}

let User = function (this: User, name: string) {
  this.name = name;
};
//@ts-expect-error
const vova = new User("Vova");

export {};
