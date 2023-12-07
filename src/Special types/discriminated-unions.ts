function getUser(): ["error", Error] | ["sucess", { name: string, age: number }] {
    if (Math.random() > 0.5) return ["sucess", {name: 'Anna', age: 18}]
    else return ["error", new Error('No user')]
}
const [first, second] = getUser();
if(first==="sucess"){
    second; // { name: string, age: number }
} else {
    second //: Error
}

const user = getUser();
if(user[0]==="sucess"){
    user;
}

