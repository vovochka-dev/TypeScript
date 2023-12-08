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
//@ts-expect-error
string = boolean;
//@ts-expect-error
number = boolean;
boolean = boolean;
//@ts-expect-error
object = boolean;
//@ts-expect-error
symbol = boolean;
//@ts-expect-error
_null = boolean;
//@ts-expect-error
_undefined = boolean;
//@ts-expect-error
_void = boolean;
//@ts-expect-error
never = boolean;

// children (narrowed types)
boolean = any;
//@ts-expect-error
boolean = unknown;
//@ts-expect-error
boolean = string;
//@ts-expect-error
boolean = number;
boolean = boolean;
//@ts-expect-error
boolean = object;
//@ts-expect-error
boolean = symbol;
//@ts-expect-error
boolean = _null;
//@ts-expect-error
boolean = _undefined;
//@ts-expect-error
boolean = _void;
boolean = never;

;
