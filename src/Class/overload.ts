import {type} from "os";

class User {
    name?: string;
    age?: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) { // have to implement all previous constructors
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        } else if (typeof ageOrName === "number") {
            this.age = ageOrName;
        } else if (typeof age === "number") {
            this.age = age;
        }
    }
}

const user = new User();
const user2 = new User('Anna');
const user3 = new User(18);
const user4 = new User('Anna', 18);

;
