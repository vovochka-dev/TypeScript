type paymentAction = 'refound' | 'checkout' | 'reject'
//type paymentAction = 'refound' | 'checkout'
function processAction(action: paymentAction){
    switch(action) {
        case "checkout": {
            let sum = 10;
            return sum;
        }
        case "refound": {
            let sum = 0;
            return sum;
        }
        default:
            //@ts-expect-error
            const _:never = action;
            throw new Error('No such action')
    }
}
