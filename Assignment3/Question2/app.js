// declarations
let submitBtn = document.getElementById("submit-btn")
let userDisplay = document.getElementById("display-username")
let displayField = document.getElementById("result")
let textInput = document.getElementById('textarea')
let wordLen = document.getElementById('word-len')
let shape = document.getElementById('shape')
let shapes = document.getElementById('shapes')
let bgColors = document.getElementById('bg-colors')



// functions 
function submitUserName(){
    let userName = document.getElementById('user').value;
    userDisplay.innerHTML = `welcome ${userName}`;
}

function textArea() {
    let textField = document.getElementById('textarea').value
    wordLen.innerHTML = textField.length
    displayField.innerHTML = textField
}

submitBtn.addEventListener("click", submitUserName)
textInput.addEventListener('keyup', textArea)

shapes.addEventListener('change',(e)=>{
    let selectedShape = e.target.value

    if (selectedShape === 'rectangle') {
        shape.setAttribute('class', 'rect')
    }else if(selectedShape === 'circle'){
        shape.setAttribute('class', 'circle')
    }else if(selectedShape === 'square'){
        shape.setAttribute('class', 'square')
    }else{
        shape.setAttribute('class', 'oval')
    }
})

bgColors.addEventListener('change', (e)=>{
    let selectedBgColor = e.target.value

    if(selectedBgColor === 'black'){
        shape.style.backgroundColor = "black";
    }else if(selectedBgColor === 'red'){
        shape.style.backgroundColor = "red"
    }else if(selectedBgColor === 'blue'){
        shape.style.backgroundColor = "#0088CA"
    }else {
        shape.style.backgroundColor = "#4CAF50"
    }
})
