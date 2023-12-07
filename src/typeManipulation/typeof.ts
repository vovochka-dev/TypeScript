type User = {
    name: string,
    age: number
}

let userAnna: User = {
    name: 'Anna',
    age:18
}
// userAnnaType is alias to a User type
type userAnnaType = typeof userAnna; // get type of userAnna object


