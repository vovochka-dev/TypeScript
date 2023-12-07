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
string = number;
number = number;
boolean = number;
object = number;
symbol = number;
_null = number;
_undefined = number;
_void = number;
never = number;

// children (narrowed types)
number = any;
number = unknown;
number = string;
number = number;
number = boolean;
number = object;
number = symbol;
number = _null;
number = _undefined;
number = _void;
number = never;

;
