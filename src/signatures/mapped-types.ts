type nameAge = {
    [key in "name" | "age" | 5]: string | number
}

type nameAge2 = {
    name: string | number,
    age: string | number
    5: string | number
}

let nameAgeStringNumber: nameAge = {
    name: 'Anna',
    age: 18,
    5: 'five'
    //age:true, // boolean is not assignable to string|number
    //secondName:'Maria' // nameAge has no secondName property
}


type User = {
    name: string,
    age: number
}

//type TUser = keyof User; // "name" | "age"

type UserLike = {
    [key in keyof User]: string | number
}
type UserLikeAllOptional = {
    [key in keyof User as Exclude<`field_${String & key}`, 'field_age'>] : string | number
}
let userAnna:UserLikeAllOptional = {
    field_name: 'Anna',
    //field_age:18
};

type ObjectWithString<T> = {
    [key in keyof T]: string
}



type Modifier = 'read' | 'update' | 'create'

type userRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}

type ModifierToAccess<Type> = {
    [fields in keyof Type]: boolean
}
type UserAccess2 = ModifierToAccess<userRoles>
Array<number>
type userAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}


