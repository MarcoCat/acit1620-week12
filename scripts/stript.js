function onClick(event){
    console.log(event.target.tagName);
    changeName(event.target);
    changeBGColor();
}

function addObjectColor(event){
    event.target.classList.add('green')
}

function removeObjectColor(event){
    event.target.classList.remove('green')
}

function changeBGColor(){
    document.body.classList.toggle('pink');
}

function changeName(object){
    object.textContent = object.textContent == 'Clicked' ? 'Click Me!' : 'Clicked';
}

function addNewButton(){
    let newButton = document.createElement('button');
    newButton.textContent = 'Purple'
    document.body.appendChild(newButton);
}

for(let i = 1; i < 11; i++){
    let newButton = document.createElement('button');
    newButton.textContent = i;
    document.body.appendChild(newButton);
}

const buttonArray = document.querySelectorAll('button');
console.log(buttonArray);
for(let button of buttonArray){
    button.addEventListener('click', onClick);
    button.addEventListener('mouseenter', addObjectColor);
    button.addEventListener('mouseleave', removeObjectColor);
}

const addButton = document.querySelectorAll('.addButton');
addButton.addEventListener('click', addNewButton);
addButton.removeEventListener('click', onClick);

let buttonContainer = querySelector('div')