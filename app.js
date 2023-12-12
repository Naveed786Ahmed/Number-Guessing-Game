const ran = Math.ceil(Math.random() * 10)
let guesses = 0;

document.getElementById("submit").onclick = function(){
    let input = document.getElementById("guess").value;
    guesses++;

    if(input == ran){
        alert(`${input} is the number. is too You ${guesses} guesses`)
    }
    else if(input < ran){
        alert(`Too Smaller`)
    }
    else{
        alert(`Too Larger`)
    }
}