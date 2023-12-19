// forEach loop in arrays
// its called=> higher order function/method
// callback is higher order functin----  that either take another function has a parameter inside them or they return another functionas thier output,

// forEach use function like ...not givvven new array

// arr.forEach(callBackFuncton)
// callBackFuncton : here it is function to excute for each elements in the Array.

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function printMy(val)) {
        console.log(val);
    }
    // same 
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((val) => {
    console.log(val);
    console.log(val.toUpperCase());
});
// we can access index like type val,Idx abd (log val,idx) other arr
// 3 parameters use forEach val,idx,arr
// forEach workd only arrays

// practise=> per array squar

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((num) => {
    console.log(num * num); /*  arr**2   */
});
//   output->1,4,9,16,25,36
// alternative

let arr = [1, 2, 3, 4, 5];
let calSquare = (num) => {
    console.log(num * num);
};
arr.forEach(calSquare);