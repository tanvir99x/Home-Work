let divs = document.querySelectorAll('.box');
idx = 0;
for (let div of divs) {
    div.innerText = `new text ${idx}`;
    idx++
};

// window object;=> the window object  represent an open window ina browsure.its a browsure object not a java sripts its auto created by browsure.

// what is DOM=>whenn aweb page is loaded, the browsure creates a documents object model (DOM) of the page.

// html=>javascript (obj called document) acees htmnl.
document.body.childNodes[0].innerText = 'abcd';


// all div elements change throgh JS
// let dev = document.querySelector('h2');
// console.dir(dev.innerText);
// dev.innerText = dev.innerText + "From Bangladesh";
let divs = document.querySelectorAll('.hd1');
let idx = 1;
for (div of divs) {
    div.innerText = (`I am Tanvir new${idx}`);
    idx++;
}