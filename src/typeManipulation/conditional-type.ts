// extends not in left side type<T extends..., but in right side type definition
type isString<T> = T extends string ? 'yes' : 'no'
type test = isString<string> // 'yes'
let hi = 'hi'
type test2 = isString<typeof hi> // 'yes'


type mirrorStringOrNumber<T extends string | number> = T extends string ? 'string' : 'number'
type mirrorString1 = mirrorStringOrNumber<string>

type mirrorType<T> = T extends infer R ? R : never
type mirrorString = mirrorType<string>;
type mirrorBoolean = mirrorType<boolean>;

type typeOrBoolean<T> = T extends infer R ? R | boolean : never
type stringOrBoolean = typeOrBoolean<string>

// Nested conditional
type typeOrBoolean2<T> = T extends infer R ?
    R extends boolean ?
        never :
        R | boolean
    : never

type booleanOrBoolean1 = typeOrBoolean<boolean> // boolean
type booleanOrBoolean2 = typeOrBoolean2<boolean> // never

// object literal
type HttpResponse<T extends 'success' | 'error'> = {
    result: T,
    code: number,
    data: T extends 'success'? string : Error
}
