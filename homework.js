//1.Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.


//2.Insert a number. Remove all zeros from the number, except the last one and print the
//number. If there are at most one zero, print “Nothing to remove”.

//3.Insert a n positive number. Check number is prime or not. Prime numbers are numbers
//that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
//2, 3, 5, 7, and 11.
function isPrime(num) {
    for (let i = 2; i < num; i++){
        if(num % i === 0) {
            return false
        }
    }
    return num > 1
}


//4.Insert a n positive number. Print the n-st prime number.
function IsPrime(number) {
    for (let i = 2; i < number; i++){
        if(number % i === 0) {
            return false
        }
    }
    return number > 1
}

function FindPrime(n) {
    let count = 0
    let number = 2

    while (count < n) {
        if (IsPrime(number)) {
            count++
        }
        number++
    }
    return number - 1
}



//5.Insert two positive integers n and m between 1 and 10. Compute and print n^m .
function print(n,m) {
    if (n > 1 && n < 10 && m > 1 && m < 10)
    var result = Math.pow(n,m)
  console.log(result)
}

  

  