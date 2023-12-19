// dom- artributes=>

// getAttribute(Attr)=>
// id access and attribute value acees

let div = document.querySelector('div');
console.dir(div);
let id = div.getAttribute('id');
console.log(id);
let name = div.getAttribute('name');
console.log(name);

// class attribute value access

let para = document.querySelector('p');
console.log(para.getAttribute('class'));

// setAtrribute (attr,value)=> change attr value

// class name change=>
let para = document.querySelector('p');
console.log(para.setAttribute('class', 'nclass'));