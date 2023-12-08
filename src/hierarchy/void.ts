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
any = _void;
unknown = _void;
//@ts-expect-error
string = _void;
//@ts-expect-error
number = _void;
//@ts-expect-error
boolean = _void;
//@ts-expect-error
object = _void;
//@ts-expect-error
symbol = _void;
//@ts-expect-error
_null = _void;
//@ts-expect-error
_undefined = _void;
_void = _void;
//@ts-expect-error
never = _void;

// children (narrowed types)
_void = any;
//@ts-expect-error
_void = unknown;
//@ts-expect-error
_void = string;
//@ts-expect-error
_void = number;
//@ts-expect-error
_void = boolean;
//@ts-expect-error
_void = object;
//@ts-expect-error
_void = symbol;
//@ts-expect-error
_void = _null;
_void = _undefined;
_void = _void;
_void = never;

;
