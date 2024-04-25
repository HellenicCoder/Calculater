let equalPressed = 0;
// refer all buttons exluc AD and DEL
let buttonInput = document.querySelectorAll(".input-button")
// refer input equal clear and earse
let input = document.getElementById("input")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let erase = document.getElementById("earse")


window.onload = () => {
    input.value = ""
}
buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        if(equalPressed == 1){
            input.value = "";
            equalPressed = 0;
        }
        input.value += buttonClass.value;
    })
})


equal.addEventListener("click", () => {
    equalPressed = 1;
    let inpVal = input.value;
    try{
        // evaluate user light
        let solution = eval(inpVal)
        // true for natural numbers
        //false for decimal
        if(Number.isInteger(solution)){
            input.value = solution
        }
        else{
            input.value = solution.toFixed(2);
        }
    }catch(err){
        alert("invalid Input")
    }
});
// clear whole 
clear.addEventListener("click", () => {
    input.value = "";
});
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1)
})