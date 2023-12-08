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
any = symbol;
unknown = symbol;
//@ts-expect-error
string = symbol;
//@ts-expect-error
number = symbol;
//@ts-expect-error
boolean = symbol;
//@ts-expect-error
object = symbol;
symbol = symbol;
//@ts-expect-error
_null = symbol;
//@ts-expect-error
_undefined = symbol;
//@ts-expect-error
_void = symbol;
//@ts-expect-error
never = symbol;

// children (narrowed types)
symbol = any;
//@ts-expect-error
symbol = unknown;
//@ts-expect-error
symbol = string;
//@ts-expect-error
symbol = number;
//@ts-expect-error
symbol = boolean;
//@ts-expect-error
symbol = object;
symbol = symbol;
//@ts-expect-error
symbol = _null;
//@ts-expect-error
symbol = _undefined;
//@ts-expect-error
symbol = _void;
symbol = never;

;
