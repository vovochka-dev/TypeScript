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
any = boolean;
unknown = boolean;
string = boolean;
number = boolean;
boolean = boolean;
object = boolean;
symbol = boolean;
_null = boolean;
_undefined = boolean;
_void = boolean;
never = boolean;

// children (narrowed types)
boolean = any;
boolean = unknown;
boolean = string;
boolean = number;
boolean = boolean;
boolean = object;
boolean = symbol;
boolean = _null;
boolean = _undefined;
boolean = _void;
boolean = never;

export {};
