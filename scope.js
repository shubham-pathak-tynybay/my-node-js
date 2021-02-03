const percentage = 100;
var name = "Naresh";
let email = "naresh@gmail.com";
let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(window.a); // undefined
console.log(window.b); // 'world'
var a = 'world'; // No problem, 'hello' is replaced.
let b = 'world'; // SyntaxError: Identifier 'b' has already been declared

console.log("percentage", percentage);
console.log("name first", name);
console.log("email first", email);

let welcome = () => {
    name = "naresh Dasireddi";
    let email = "new@gmail.com";
    console.log("name", name);
    console.log("email", email);
}
welcome()
console.log("name===>", name);
console.log("email==>", email);