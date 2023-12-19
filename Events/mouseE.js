// let button = document.querySelector('button');
// button.onclick = () => {
//     console.log('button clcoiked')
//     let a = 25;
//     a++;
//     console.log(a);
// }
let div = document.querySelector('button');
div.onmouseover = () => {
    console.log('HI ');
}

// onclock means one click open
// ondblclick means dubble click to open target
// mousover means when inside mouse in target

let btn = document.querySelector('button');
btn.ondblclick = () => {
    console.log('Submit Your Details', alert('congratualations'));
};