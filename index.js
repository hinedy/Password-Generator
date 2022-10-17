// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
const alphaSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsSet = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rangeEl = document.getElementById("range-el")
let lengthEl = document.getElementById("length")
rangeEl.textContent = lengthEl.value

function showVal(val){
    rangeEl.textContent = val
}

let pass1 = document.getElementById("pass-1")
let pass2 = document.getElementById("pass-2")
let alphaEl = document.getElementById("alpha")
let numbersEl = document.getElementById("numbers")
let symbolsEl = document.getElementById("symbols")
let characters = [];

function newPass() {
    
    if(alphaEl.checked){
        characters = characters.filter(el => !alphaSet.includes(el)).concat(alphaSet)
    } else {
        characters = characters.filter(el => !alphaSet.includes(el));
    }if(numbersEl.checked){
        characters = characters.filter(el => !numbersSet.includes(el)).concat(numbersSet)
    } else {
        characters = characters.filter(el => !numbersSet.includes(el));
    }if(symbolsEl.checked){
        characters = characters.filter(el => !symbolsSet.includes(el)).concat(symbolsSet)
    } else {
        characters = characters.filter(el => !symbolsSet.includes(el));
    }
    
    if (alphaEl.checked|| numbersEl.checked || symbolsEl.checked){
        pass1.textContent = generatePass()
        pass2.textContent = generatePass()
    } else {
        alert('Please, check at least one checkbox!')
    }
}

function generatePass() {
    let length = lengthEl.value
    let password = ""

    for (i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]   
    }
    return password
}



