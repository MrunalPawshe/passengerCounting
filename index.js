
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function reset(){
    count = 0
    countEl.innerText = count
}

function save(){
    result = " " + count + " - "
    //textcontent is same as innertext but innertext cannot return nonreadable characters but this one does
    saveEl.textContent += result
}
