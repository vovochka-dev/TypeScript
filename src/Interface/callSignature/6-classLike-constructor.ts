interface User {
  name: string;
  age: number;
}

interface CreateUser {
  (name: string, age: number): User; // We not set any property with callable syntax (name: string, age: number): User;
}

type CreateUser2 = (name: string, age: number) => User; // better way to describe function

function createUser(name: string, age: number): User {
  const user: User = {
    name,
    age,
  };
  return user;
}

let Vova = createUser("Vova", 18); // it's not actually class, its function (call without "new" keyword)
let Vasya = createUser("Vasya", 44);

console.log(Vova, Vasya);

export {};
