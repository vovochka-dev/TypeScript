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
string = unknown;
number = unknown;
boolean = unknown;
object = unknown;
symbol = unknown;
_null = unknown;
_undefined = unknown;
_void = unknown;
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
