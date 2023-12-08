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
any = _null;
unknown = _null;
//@ts-expect-error
string = _null;
//@ts-expect-error
number = _null;
//@ts-expect-error
boolean = _null;
//@ts-expect-error
object = _null;
//@ts-expect-error
symbol = _null;
_null = _null;
//@ts-expect-error
_undefined = _null;
//@ts-expect-error
_void = _null;
//@ts-expect-error
never = _null;

// children (narrowed types)
_null = any;
//@ts-expect-error
_null = unknown;
//@ts-expect-error
_null = string;
//@ts-expect-error
_null = number;
//@ts-expect-error
_null = boolean;
//@ts-expect-error
_null = object;
//@ts-expect-error
_null = symbol;
_null = _null;
//@ts-expect-error
_null = _undefined;
//@ts-expect-error
_null = _void;
_null = never;

;
