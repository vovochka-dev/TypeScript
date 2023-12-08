type User<T> = { name: string, age: number, role: T }

let user: User<string> = {
    name: "Anna",
    age: 18,
    role: 'admin'
}

/*
let user<T>: { name: string, age: number, role: T } = {
    name: "Anna",
    age: 18,
    role: 5
}
*/
