// with type alias
type mirrorType<T, U> = T; // nonsense, just return same unchanged type
function mirror(a: any) {
    return a
} // same logic but for values, not for types

// add some logic with union type
type stringOr<T> = string | T;
type stringOrNumber = stringOr<number>;


