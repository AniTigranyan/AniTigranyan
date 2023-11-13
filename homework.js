//1.Given a number. Print “odd” if the number is odd and “even” if it’s even.
num = 123
if (num % 2 === 0) {console.log("even")}
else; {
    console.log("odd")
}

num1 = 35 
if (num1 % 2 === 0) {console.log("even")}
else; {
    console.log("odd")
}

num2 = 70;
if (num2 % 2 === 0) {console.log("even")}
else; {
    console.log("odd")
}

//2.Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let a = 3
let b = 14
if (a % b === 0 || b % a === 0) {
    console.log(1)
}
else; {
    console.log(0)
}

let a1 = 18
let b1 = 2
if (a1 % b1 === 0 || b1 % a1 === 0) {
    console.log(1)
}
else; {
    console.log(0)
}

let a2 = 7
let b2 = 21
if (a2 % b2 === 0 || b2 % a2 === 0) {
    console.log(1)
}
else; {console.log(0)
}

//3.Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same.


//4.Given five numbers as input. Calculate and print the average of the numbers(without
//using arrays)

let nums1 = 45
let nums2 = -12
let nums3 = 0
let nums4 = 3
let nums5 = - 15

let sum = nums1 + nums2 + nums3 + nums4 + nums5
let count = 5
let average = sum / count 
console.log("The average of the numbers is: " + average)

let num6 = 7
let num7 = 52
let num8 = -23
let num9 = 9
let num10 = -81

let sum1 = num6 + num7 + num8 + num9 + num10
let count1 = 5
let average1 = sum1 / count1
console.log("The average of the numbers is: " + average1)

//5.Given the following code rewrite it using only two if operators. (Hint: use logical operators)

var n = +prompt();
var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1
}
if (n % 3 === 0 && n % 10 === 1) {
    j += 1
}