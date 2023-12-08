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
any = number;
unknown = number;
//@ts-expect-error
string = number;
number = number;
//@ts-expect-error
boolean = number;
//@ts-expect-error
object = number;
//@ts-expect-error
symbol = number;
//@ts-expect-error
_null = number;
//@ts-expect-error
_undefined = number;
//@ts-expect-error
_void = number;
//@ts-expect-error
never = number;

// children (narrowed types)
number = any;
//@ts-expect-error
number = unknown;
//@ts-expect-error
number = string;
number = number;
//@ts-expect-error
number = boolean;
//@ts-expect-error
number = object;
//@ts-expect-error
number = symbol;
//@ts-expect-error
number = _null;
//@ts-expect-error
number = _undefined;
//@ts-expect-error
number = _void;
number = never;

;
