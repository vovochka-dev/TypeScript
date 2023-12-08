let any:any;
let unknown:unknown;
let string:string = "hello";
let number:number = 777;
let boolean:boolean = true;
let object:object = {};
let symbol:symbol = Symbol('foo');
let _null:null = null;
let _undefined:undefined;
let _void:void = (function(){})();
let never:never= (function(){throw new Error()})();;
let never2:never= (function(){throw new Error()})();;

// parents (wide types)
any = never;
unknown = never;
string = never;
number = never;
boolean = never;
object = never;
symbol = never;
_null = never;
_undefined = never;
_void = never;
never = never2;

// children (narrowed types)
//@ts-expect-error
never = any;
//@ts-expect-error
never = unknown;
//@ts-expect-error
never = string;
//@ts-expect-error
never = number;
//@ts-expect-error
never = boolean;
//@ts-expect-error
never = object;
//@ts-expect-error
never = symbol;
//@ts-expect-error
never = _null;
//@ts-expect-error
never = _undefined;
//@ts-expect-error
never = _void;
never = never2;

;
