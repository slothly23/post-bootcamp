let arr1 = [8 ,3 ,9 ,2 ,5],
    arr2 = [3 ,4 ,6 ,7 ,9],
    arr3 = [4 ,5 ,9 ,15 ,19],
    arr4 = [2 ,4 ,7 ,8 ,1]

// ketentuan:
// habis dibagi 3 dan 5 -> 'fizz buzz'
// habis dibagi 3 -> 'fizz'
// habis dibagi 5 -> 'buzz'
// lainnya -> elemen array

// use for 
function fizzBuzzArray (arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 3 === 0 && arr[i] % 5 === 0 ) {
            arr[i] = 'fizz' + ' ' + 'buzz'
        } 
         if ( arr[i] % 3 === 0 ) {
            arr[i] = 'fizz'
        }
         if ( arr[i] % 5 === 0 ) {
            arr[i] = 'buzz'
        } 
    }
    return arr
}

console.log(fizzBuzzArray(arr1)); // [ 8, 'fizz', 'fizz', 2, 'buzz' ]
console.log(fizzBuzzArray(arr2)); // [ 'fizz', 4, 'fizz', 7, 'fizz' ]
console.log(fizzBuzzArray(arr3)); // [ 4, 'buzz', 'fizz', 'fizz buzz', 19 ]
console.log(fizzBuzzArray(arr4)); // [ 2, 4, 7, 8, 1 ]

// use built-in function
function fizzBuzzArr (arr) {
    arr.map(function(element) {
        if ( element % 3 === 0 && element % 5 === 0 ) {
             element = 'fizz' + ' ' + 'buzz'
        } 
         if ( element % 3 === 0 ) {
            return element = 'fizz'
        }
         if ( element % 5 === 0 ) {
            return element = 'buzz'
        } 
    })
    return arr
}

console.log('=====================================================');
console.log(fizzBuzzArr(arr1)); // [ 8, 'fizz', 'fizz', 2, 'buzz' ]
console.log(fizzBuzzArr(arr2)); // [ 'fizz', 4, 'fizz', 7, 'fizz' ]
console.log(fizzBuzzArr(arr3)); // [ 4, 'buzz', 'fizz', 'fizz buzz', 19 ]
console.log(fizzBuzzArr(arr4)); // [ 2, 4, 7, 8, 1 ]