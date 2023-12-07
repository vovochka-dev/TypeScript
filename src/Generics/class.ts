class User<T> {
    constructor(public name:string, public age:number, public role:T) {
    }
}
type userType<T> = User<T>
const anna: User<boolean> = new User('Anna', 18, true)

console.log(anna)