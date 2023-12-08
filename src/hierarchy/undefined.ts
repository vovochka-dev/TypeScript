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
//@ts-expect-error
string = _undefined;
//@ts-expect-error
number = _undefined;
//@ts-expect-errorboolean = _undefined;
object = _undefined;
//@ts-expect-errorsymbol = _undefined;
_null = _undefined;
_undefined = _undefined;
_void = _undefined;
//@ts-expect-error
never = _undefined;

// children (narrowed types)
_undefined = any;
//@ts-expect-error
_undefined = unknown;
//@ts-expect-error
_undefined = string;
//@ts-expect-error
_undefined = number;
//@ts-expect-error
_undefined = boolean;
//@ts-expect-error
_undefined = object;
//@ts-expect-error
_undefined = symbol;
//@ts-expect-error
_undefined = _null;
_undefined = _undefined;
//@ts-expect-error
_undefined = _void;
_undefined = never;

;
