function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log('Welcome ${this.username}');
    }
    // return this;
}

const userOne =new User("Alka", 12, true)
const userTwo =new User("Anu", 2, false)
console.log(userOne);
// console.log(userOne.constructor);

console.log(userTwo);
console.log(userOne instanceof User);
console.log(userTwo instanceof User);