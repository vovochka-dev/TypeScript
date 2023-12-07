function arrayValue<T>(a:T):Array<T>{
    return [a];
}

function promiseValue<T>(a: T): Promise<T> {
    return Promise.resolve(a);
}


