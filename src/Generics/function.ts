// function declaration
function mirrorValue<T>(a: T): T {
    return a;
}

// array function expression
<T>(a: T): Array<T> => [a];

// function type
const mirrorArray:<T>(a: Array<T>) => Array<T> = (a)=>a;
