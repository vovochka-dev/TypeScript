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
string = _void;
number = _void;
boolean = _void;
object = _void;
symbol = _void;
_null = _void;
_undefined = _void;
_void = _void;
never = _void;

// children (narrowed types)
_void = any;
_void = unknown;
_void = string;
_void = number;
_void = boolean;
_void = object;
_void = symbol;
_void = _null;
_void = _undefined;
_void = _void;
_void = never;

export {};
