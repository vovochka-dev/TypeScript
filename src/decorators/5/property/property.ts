function mirror(value:any, context:any){
    return value;
}

class User {
    @mirror
    name: string
    constructor(name:string){
        this.name = name;
    }
}