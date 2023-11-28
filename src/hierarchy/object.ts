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
any = object;
unknown = object;
string = object;
number = object;
boolean = object;
object = object;
symbol = object;
_null = object;
_undefined = object;
_void = object;
never = object;

// children (narrowed types)
object = any;
object = unknown;
object = string;
object = number;
object = boolean;
object = object;
object = symbol;
object = _null;
object = _undefined;
object = _void;
object = never;

export {};
