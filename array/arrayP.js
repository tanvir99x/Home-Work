let n = prompt('Enter a Number');
let arr = [];
for (let i = 1; i < n; i++) {
    arr[i - 1] = i;
};
console.log(arr);