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
number = string;
boolean = string;
object = string;
symbol = string;
_null = string;
_undefined = string;
_void = string;
never = string;

// children (narrowed types)
string = any;
string = unknown;
string = string;
string = number;
string = boolean;
string = object;
string = symbol;
string = _null;
string = _undefined;
string = _void;
string = never;

;
