// filter method=>  lets doing filter all even elements from array;*/
// filter retun only 2 value true or false
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter((val) => {
    return val % 2 === 0; /*odd=!==*/
    val > 3 output show 3 after
});
console.log(even);
console.log(arr)

// practise-1 => filter out marks whos have 90+
let marks = [50, 94, 88, 100, 78, 96, 50, 91];

let upM = marks.filter((val) => {
    return val > 90
});
console.log(upM);