function encode(v:any){return v}
function decode(v:any){return v}

class User {
    _login?: string;
    _password?: string;
    set login(login:string) {
        this._login = 'user_'+login;
    }
    set password(password:string) {
        this._password = encode(password)
    }
    get password() {
        return decode(this._password)
    }
}

export {}
