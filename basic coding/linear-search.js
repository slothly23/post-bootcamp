// use For
let arr1 = [8 ,3 ,9 ,2 ,5],
    arr2 = [2 ,6 ,7 ,4 ,1],
    arr3 = [2 ,6 ,7 ,5 ,1]

function findNumber (arr, number) {
    for (let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === number ) {
            return number
        }
    }
}

console.log(findNumber(arr1, 3));
console.log(findNumber(arr2, 4));
console.log(findNumber(arr3, 9));