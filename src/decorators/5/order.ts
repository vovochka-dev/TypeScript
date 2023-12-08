function one(_: any, context: any) {
    console.log('one')
}

function two(_: any, context: any = {}) {
    console.log('two')
}
function three(_: any, context: any = {}) {
    console.log('three')
}

@three
class User {

    @two rank: number = 0;
    @two status: string = 'user';

    @one
    goodbye() {
        console.log(`goodbye`);
    }
}


