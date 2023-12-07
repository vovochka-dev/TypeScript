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
any = any;
unknown = any;
string = any;
number = any;
boolean = any;
object = any;
symbol = any;
_null = any;
_undefined = any;
_void = any;
never = any;

// children (narrowed types)
any = any;
any = unknown;
any = string;
any = number;
any = boolean;
any = object;
any = symbol;
any = _null;
any = _undefined;
any = _void;
any = never;

;
