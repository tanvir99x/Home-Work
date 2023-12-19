let logo = document.getElementById('#logo');
console.dir(logo);

let logo = document.getElementsByClassName('.logo');
console.dir(logo);

// node.append(el) => add end of node
// first access target div and append

let newDiv = document.createElement('button');
newDiv.innerText = 'clickme';
console.log(newDiv);

let div = document.querySelector('div');
div.prepend(newDiv)

// node.prepend(el); add first/ after =div after /before=div before

// create first in body tag
let heading = document.createElement('h1');
heading.innerHTML = '<i>I am New</i>';
document.querySelector('body').prepend(heading);