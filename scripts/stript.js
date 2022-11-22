function onClick(event){
    console.log(event.target.tagName)
    changeName(event.target)
    changeColor()
}

function changeColor(){
    document.body.classList.toggle('pink')
}

function changeName(object){
    object.textContent = object.textContent == 'Clicked' ? 'Click Me!' : 'Clicked'
}

const buttonArray = document.querySelectorAll('.click-me')
console.log(buttonArray)
for(let button of buttonArray){
    button.addEventListener('click', onClick)
}