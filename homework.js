//1.Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
//its digits product is equal to n.


//2.Find the biggest common divisor of two inserted numbers.
function findCommonDivisor(a,b){
        while (b) {
            [a, b] = [b, a % b]
        }
        return a
}

//3.Given a number. Print all prime factors of the number.


//4.Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2
//* 1 , 0! = 1 )
function calculateFactorial(n) {
    if (n < 0){
        return false
    }
    else if (n === 0 || n === 1){
        return 1
    }
    else {
        let factorial = 1
        for (let i = n; i >= 2; i--) {
            factorial *= i
        }
        console.log(factroial)
    }
}



//5.Given a number n ( n >= 0 ). Print n Fibonacci number.
function printFibonacciNum(n){
    let a = 0
    let b = 1
    for (let i = 2; i <= n; i++) {
        let sum = a + b
        a = b
        b = sum
    }
    return b 
    
}

//6.Given a number n ( n > 0 ). Print Fibonacci series up to n.
function printFibonacci(n){
    a = 0 
    b = 1
    while (a + b <= n) {
        let sum = a + b;
        console.log(sum);
        a = b;
        b = sum;
    }
}