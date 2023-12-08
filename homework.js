//1.Given a string. Check whether the string is palindrome or not.
function checkStr(str){
    const length = str.length
    for (let i = 0; i < length / 2; i++){
        if (str[i] !== str[length - 1 - i]) {
            return false
    }
    else {
        return true
    }
  }
}

//2.Given a string and symbols. Change first symbol by the second one in the string.
function changeSimbols(str, firstSimbol, secondSimbol){

}

//3.Insert a string. Create new string which is the mirror reverse of the inserted one around
//its center.
function reverseStr(str) {
    const center= Math.floor(str / 2)
    let Array = []
    for (let i = center - 1; i >= 0; i--) {
        Array.push(str[i]);
    }
    if (str.length % 2 !== 0) {
        center++;
    }
    for (let i = center; i < str.length; i++) {
        Array.push(str[i]);
    }
}

//4.Print the following number pattern: function will take argument (in this case it is 5)
function printNumberPattern(n){
    let row = ""
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            row += j
        }
        console.log(row)
    }
    for (let i = n - 1; i >= 1; i--){
        let row = ""
        for(let j = 1; j <= i; j++){
            row += j
        }
        return row
    }
}

//5.Given an object. Invert it (keys become values and values become keys).