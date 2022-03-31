// 1. Write a javascript function that reverse a number

function reverseNumber(number){
    number= number+"" //Convert a number to a string
    return number.split('').reverse().join('')
}

console.log("The reverse of the number is "+reverseNumber(12345))

//2. Write a Javascript function which accepts an argument and returns the type.

function checkType(value){
    return(typeof value);
}
console.log(checkType(true));

//3. Write a Javascrpt program to pas a 'Javascript function' as parameter

function test(callback) {
    callback();
}
function func() {
    console.log('Hello World');
}

test(func);


// 4. Write a Javascript function to get the function name
function functionName(){
    console.log(arguments.callee.name);
}
functionName();

