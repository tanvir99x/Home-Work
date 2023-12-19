let btn = document.querySelector('button');
btn.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
};