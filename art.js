const artwork1 = document.querySelector('#artwork1')
const artwork2 = document.querySelector('#artwork2')
const artwork3 = document.querySelector('#artwork3')
const artwork4 = document.querySelector('#artwork4')
const artwork5 = document.querySelector('#artwork5')
const artwork6 = document.querySelector('#artwork6')
const artwork7 = document.querySelector('#artwork7')
const artwork8 = document.querySelector('#artwork8')
const artwork9 = document.querySelector('#artwork9')


init()

function init() {

for (let i=100; i < 300; i+=20) {
   let newBox = document.createElement('div');
   newBox.className = ('box');
   newBox.setAttribute('width', i);
   newBox.setAttribute('height', i);
    artwork1.appendChild(newBox); 
}
}