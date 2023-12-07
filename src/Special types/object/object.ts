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
any = _undefined;
unknown = _undefined;
string = _undefined;
number = _undefined;
boolean = _undefined;
object = _undefined;
symbol = _undefined;
_null = _undefined;
_undefined = _undefined;
_void = _undefined;
never = _undefined;

// children (narrowed types)
_undefined = any;
_undefined = unknown;
_undefined = string;
_undefined = number;
_undefined = boolean;
_undefined = object;
_undefined = symbol;
_undefined = _null;
_undefined = _undefined;
_undefined = _void;
_undefined = never;

;

