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
//@ts-expect-error
string = object;
//@ts-expect-error
number = object;
//@ts-expect-error
boolean = object;
object = object;
//@ts-expect-error
symbol = object;
//@ts-expect-error
_null = object;
//@ts-expect-error
_undefined = object;
//@ts-expect-error
_void = object;
//@ts-expect-error
never = object;

// children (narrowed types)
object = any;
//@ts-expect-error
object = unknown;
//@ts-expect-error
object = string;
//@ts-expect-error
object = number;
//@ts-expect-error
object = boolean;
object = object;
//@ts-expect-error
object = symbol;
//@ts-expect-error
object = _null;
//@ts-expect-error
object = _undefined;
//@ts-expect-error
object = _void;
object = never;

;
