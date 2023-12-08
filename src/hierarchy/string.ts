let any:any;
let unknown:unknown;
let string:string = "hello";
let number:number = 777;
let boolean:boolean = true;
let object:object = {};
let symbol:symbol = Symbol('foo');
let _null:null = null;
let _void:void = (function(){})();
let _undefined:undefined;
let never:never= (function(){throw new Error()})();

// parents (wide types)
any = string;
unknown = string;
string = string;
//@ts-expect-error
number = string;
//@ts-expect-error
boolean = string;
//@ts-expect-error
object = string;
//@ts-expect-error
symbol = string;
//@ts-expect-error
_null = string;
//@ts-expect-error
_undefined = string;
//@ts-expect-error
_void = string;
//@ts-expect-error
never = string;

// children (narrowed types)
string = any;
//@ts-expect-error
string = unknown;
string = string;
//@ts-expect-error
string = number;
//@ts-expect-error
string = boolean;
//@ts-expect-error
string = object;
//@ts-expect-error
string = symbol;
//@ts-expect-error
string = _null;
//@ts-expect-error
string = _undefined;
//@ts-expect-error
string = _void;
string = never;

;
