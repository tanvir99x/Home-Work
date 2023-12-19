// // // lets practise=
//  push, pop,toString, 
// // concat, unshift, 
// // shift, slice, splice

// 0         1        2       3           4
let arr = ['Jamal', 'kamal', 'hasan', 'Moumita', 'farjana'];
arr.push('danial', 'maisha');
let arr2 = [1, 2, 3, 4, 5, 6];

console.log(arr);
// add  start to end

arr.pop();
console.log(arr);
// delecte start from end

console.log(arr.toString());
//mathod works under consol.log all arrays covert to Strings.

let final_arr = arr.concat(arr2);
console.log(final_arr);
// works 2 arrays convert to 1 array.

arr.unshift('sadman');
console.log(arr);
// unshift works add some value in start

arr2.shift();
console.log(arr2);
// shift works delete arrays value in start


let or = arr.slice(1, 3);
console.log(or);
// or
console.log(arr.slice(1, 3));
// slice works under method called value retuen.
// dont change original arrays output new arrays

arr2.splice(2, 2, 33, 55);

console.log(arr2)
    // works specific 2-3 or 3-6 delted and replace after 2,1,66
    // not delted just add type 0 after valuer Number. when i add