//1.implement bubble sort with different loops (for, while)
function bubbleSort(arr){
    let count = 0
        for(let i = 0; i < arr.length - 1; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                    count++
                    if(arr[j] > arr[j + 1]){
                   const tmp = arr[j]
                   arr[j] = arr[j + 1]
                   arr[j + 1] = tmp
                }
            }
        }       
    return {arr: arr, count:count}
 }
    
function bubbleSort2(arr){
    let count = 0
    let i = 0
    while(i < arr.length - 1){
        let j = 0
        while (j < arr.length - i - 1) {
            count++
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
            j++
        }
        i++
    }
    return { arr: arr, count: count }
}

//2.implement build in array sort method with bubble sort algorithm
    
    
    
    
    
    
