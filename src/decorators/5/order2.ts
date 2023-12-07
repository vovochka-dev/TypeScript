function one(_: any, context: any) {
    console.log('one')
}

function two(_: any, context: any) {
    console.log('two')
}
function three(_: any, context: any) {
    console.log('three')
}

@three
@two
@one
class User {
    @three
    @two
    @one
    rank: number = 0;

    @three
    @two
    @one
    goodbye() {
        console.log(`goodbye`);
    }
}


