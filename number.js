const dec = document.getElementById("decrement")
const inc = document.getElementById("increment")
const display = document.getElementById("display")
const sub = document.getElementById("submit")
const number = document.getElementById("number")
const error = document.getElementById("error")
let cnt 
function decrement(){
    
    if(number.value){
        error.style.display = 'none'
        count = display.value -cnt 
        display.value = count
    }
    else{
        error.innerHTML = "no value has been assigned"
    }
}
function increment(){
    if(number.value){
        error.style.display = 'none'
        count = +display.value +cnt
        display.value = count
    }
    else{
        error.innerHTML="no value has been assigned"
    }
    
}
function reset(){
    display.value = 0
}
function submit(){
    console.log()
    if(+number.value <0){
        error.innerHTML="cant assign negative values"
    }
    else{
        cnt = +number.value
    }
    
}