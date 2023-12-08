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
any = unknown;
unknown = unknown;
//@ts-expect-error
string = unknown;
//@ts-expect-error
number = unknown;
//@ts-expect-error
boolean = unknown;
//@ts-expect-error
object = unknown;
//@ts-expect-error
symbol = unknown;
//@ts-expect-error
_null = unknown;
//@ts-expect-error
_undefined = unknown;
//@ts-expect-error
_void = unknown;
//@ts-expect-error
never = unknown;

// children (narrowed types)
unknown = any;
unknown = unknown;
unknown = string;
unknown = number;
unknown = boolean;
unknown = object;
unknown = symbol;
unknown = _null;
unknown = _undefined;
unknown = _void;
unknown = never;

;
