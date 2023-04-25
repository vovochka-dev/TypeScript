interface UserInterface {
  name: string;
  age: number;
  //@ts-expect-error
  #password: string; // we can't check implementation of private properties
  info: () => string;
}

class User implements UserInterface {
  #password: string;
  constructor(public name: string, public age: number) {
    this.#password = "top secret";
  }
  info() {
    return this.name + this.age;
  }

  // interface not check implementation of static method
  static info(user: UserInterface) {
    return user.name + user.age;
  }
}

let vova = new User("Vova", 18);
vova.info();
User.info(vova);

export {};
