let n:null;
let n1:any = null;

// ok if "strictNullChecks": false,
// error if "strictNullChecks": true,
//@ts-expect-error
let n2:number = null;
//@ts-expect-error
let n3:string = null;
//@ts-expect-error
let n4:undefined = null;
//@ts-expect-error
let n5:boolean = null;
//@ts-expect-error
let n6:object = null;
//@ts-expect-error
let n7:void = null;
//let n8:never = null;

//nullValue = null;
//n = n1;
//n = n2;
//n = n3;
//n = n4;
