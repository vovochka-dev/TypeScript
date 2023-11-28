function isEven(value: string|number):boolean {
    if(typeof value === 'number') return value % 2 === 0
    else return value.length % 2 === 0
}

//@ts-expect-error
function isEven2(value: string|number):boolean { // :boolean | undefined
    if(typeof value === 'number') return value % 2 === 0
    if(typeof value === 'string') return value.length % 2 === 0
    // return undefined; // implicitly
}

function isEven3(value: string|number):boolean { // in fact, boolean | never, but boolean is a wide type
    if(typeof value === 'number') return value % 2 === 0
    if(typeof value === 'string') return value.length % 2 === 0
    throw new Error("wrong value")
}

let d = isEven3("");
