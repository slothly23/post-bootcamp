let arr1 = [8 ,3 ,9 ,2 ,5],
    arr2 = [2 ,6 ,7 ,4 ,1],
    arr3 = [2 ,6 ,7 ,5 ,1]

// use For
function findNumber (arr, number) {
    for (let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === number ) {
            return arr[i]
        }
    }
}

console.log(findNumber(arr1, 3));
console.log(findNumber(arr2, 4));
console.log(findNumber(arr3, 9));


// use built-in function
function findNum (arr, number) {
   return arr.find( element => element === number )
}

console.log('===============');
console.log( findNum(arr1, 3));
console.log( findNum(arr2, 4));
console.log( findNum(arr3, 9));