// many input elements output 1 value to
// perfoms some operations & reudces the array to a single value .it returns that single value

const arr = [1, 2, 3, 4, 5];

const output = arr.reduce((pValue, cValue) => {
    return pValue + cValue; /* retun pValue > cValue ? pValue : cValue;  */
});
console.log(output);

// find out biggest Element in arrays
// just
// partise give number from user an crate num of array givvenn user and use reduce method calculate all sum in the array
let n = prompt('Enter a Number');
let arr = [];
for (let i = 1; i < n; i++) {
    arr[i - 1] = i;
};
console.log(arr);
let sum = arr.reduce((pValue, cValue) => {
    return pValue + cValue;
});
console.log('sum=', sum);


let factorial = arr.reduce((pValue, cValue) => {
    return pValue * cValue;
});
console.log(factorial);