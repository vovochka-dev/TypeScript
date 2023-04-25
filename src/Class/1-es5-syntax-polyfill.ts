interface User {
  name: string;
  sayMyName: () => void;
}
interface UserConstructor {
  new (name: string): User;
}

let User = function (name: string) {
  return {
    name,
    sayMyName: function () {
      console.log(`My name is ${name}`);
    },
  };
};

const vova = User("Vova");
//@ts-expect-error
const vova2 = new User("Vova");
