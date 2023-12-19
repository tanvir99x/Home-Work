//  node.addEventListener(event,callback);
// we can do same event and multiple work and output target ele 1
let btn = document.querySelector('button');
btn.addEventListener('click', (evt) => {
    console.log('btn was clicked 1')
        // console.log(evt);
        // console.log(evt.type);

});
let btn1 = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('btn was clicked 2')
});

let btn2 = document.querySelector('button');
btn2.addEventListener('click', () => {
    console.log('btn was clicked 3')
});


//  Remove EventListeners
// node.removeEventListener(event,callback)


const clicked3 = () => {
    console.log('btn was clicked 3');
};

btn2.addEventListener('click', clicked3);

btn2.removeEventListener('click', clicked3);