//Implement following array methods
//find 

//filter 
function filter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i])
      }
    }
    return result
  }

//forEach
function forEach(array,callback){
    for(let i = 0; i < array.length; i++){
        callback(array,i,array[i])
    }
}

//some
function some(array, callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }
    return result
 }

 //every
 function every(array,callback){
    for(let i = 0; i < array.length; i++){
        if (!callback(array[i], i, array)) {
            return false
        }
    }
        return true
}

//map
function map(array,callback){
    let result = []
    for (let i = 0; i < array.length; i++) {
         result.push(callback(array[i], i, array))
    }
  return result
}

//reduce