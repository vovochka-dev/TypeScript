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
string = _null;
number = _null;
boolean = _null;
object = _null;
symbol = _null;
_null = _null;
_undefined = _null;
_void = _null;
never = _null;

// children (narrowed types)
_null = any;
_null = unknown;
_null = string;
_null = number;
_null = boolean;
_null = object;
_null = symbol;
_null = _null;
_null = _undefined;
_null = _void;
_null = never;

export {};
