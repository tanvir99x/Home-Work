let button = document.createElement('button');
button.innerText = 'click ME!'

document.body.appendChild(button);

let mbtn = document.querySelector('button');
let cmode = 'light';
mbtn.addEventListener('click', () => {
    if (cmode === 'light') {
        cmode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black'
    } else {
        cmode = 'light';
        document.querySelector('body').style.backgroundColor = 'white'
    }
    console.log(cmode);
});