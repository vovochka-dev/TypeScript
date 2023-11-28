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
string = symbol;
number = symbol;
boolean = symbol;
object = symbol;
symbol = symbol;
_null = symbol;
_undefined = symbol;
_void = symbol;
never = symbol;

// children (narrowed types)
symbol = any;
symbol = unknown;
symbol = string;
symbol = number;
symbol = boolean;
symbol = object;
symbol = symbol;
symbol = _null;
symbol = _undefined;
symbol = _void;
symbol = never;

export {};
