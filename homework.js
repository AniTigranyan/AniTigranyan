//1.Given a number print its digits count. Use both loops (for, while)
function countDigits(number) {
    let digitCount = 0
    const numberStr = number.toString()

    for (let i = 0; i < numberStr.length; i++) {
        digitCount++
    }
    console.log(digitCount)
}

function countDigits(number) {
    let digitCount = 0
    const numberStr = number.toString()
    let i = 0
    while (i < numberStr.length) {
    digitCount++
    i++
}
    console.log(digitCount)
}


//2.Count numbers of digit 9 in a number. Use both loops (for, while)
function digit9(number) {
    let numStr = number.toString()
    let count = 0
    for (let i = 0; i < numStr.length; i++)
    if (numStr[i] === '9') {
        count++
    }
    console.log(count)
}

function countdigit9(number) {
    let numStr = number.toString()
    let count = 0 
    let i = 0
    while(i < numStr.length) {
    if (numStr[i] === '9'){
    count++
    }
    i++
  }
    console.log(count)
}


//3.Given two numbers. Print ony odd numbers between that numbers.
function printOnlyOddNumbers(start, end) 
{
    let number = start 
    while(number <= end) {
        if (number % 2 !== 0) {
          console.log(number)
        }
        number++
    }   
}

//4.Given a number as input, insert dashes (-) between each two even numbers.
function InsertDashesBetweenEvens(number) {
    const numStr = number.toString()
    let result = numStr[0]

    for(let i = 1; i < numStr.length; i++) {
        const currentDigit = numStr[i]
        const prevDigit = numStr[i - 1]
        
        if(currentDigit % 2 === 0 && prevDigit % 2 === 0) {
            result += `-${currentDigit}`
        } else {
            result += currentDigit
        }
    }
    console.log(result)
}

//5.Given a positive number. Print it in reverse order.
function reversenumber(number){
    let reversednumber = 0
    while (number > 0) {
        reversednumber =  reversednumber * 10 + number % 10 
        number = Math.floor(number / 10)
    }
    console.log(reversednumber)
}