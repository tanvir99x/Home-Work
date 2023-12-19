let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {

//     let offer = val / 10;
//     items[i] -= offer

//     console.log(`After discount 10% =${items[i]}`);
//     i++;
// }
console.log(items);
for (let i = 0; i < items.length; i++) {

    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items)


// vowles calcute 

function myV(str) {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    return myV;

}
myV('tanvirtanvir')

// Same Task with arrow

const arr = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }

    }
    return count;
}