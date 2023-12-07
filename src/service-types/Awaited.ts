// Webstorm show not correct type. It has to be just string
type A = Awaited<Promise<string>>;

// number
type B = Awaited<Promise<Promise<number>>>;

// number | boolean
type C = Awaited<boolean | Promise<number>>;

// any async function return Promise
async function getValue<T>(x:T): Promise<T> {
    return x
}
async function exampleUsage() {
    return await getValue(777);
}
type typeOfExampleUsagePromise = ReturnType<typeof exampleUsage> // Promise<number>
type typeOfExampleUsage = Awaited<ReturnType<typeof exampleUsage>> // number

let returnedType: Promise<number> = exampleUsage();
type typeOfExampleUsage2 = Awaited<typeof returnedType> // number



type PromiseLikeObject<T> = {
    then<TResult1 = any, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
    ): Promise<TResult1 | TResult2>;
};

const myPromiseLikeObject: PromiseLikeObject<string> = {
    then: (onfulfilled) => {
        // Some asynchronous operation
        setTimeout(() => {
            const result = "Hello, world!";
            onfulfilled?.(result);
        }, 1000);
        return {} as Promise<any>; // Placeholder return
    },
};

type awaitedPromiseLikeObjectType = Awaited<PromiseLikeObject<string>>


