const buttonsEl=document.querySelectorAll("button")
// console.log(buttonsEl);
const inputFieldE1=document.getElementById("result");

for(let i=0; i< buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", () => {
       const buttonValue = buttonsEl[i].textContent;
       if (buttonValue==="c"){
        clearResult();
       }else if (buttonValue==="="){
        calculateResult();
       }else if (buttonValue==="DEL"){
        deleteLastDigit();
    }else{
           appendValue(buttonValue);
       }
    });
}

// adding clear functionality
function clearResult(){
   inputFieldE1.value = " ";
}

// adding calculate functionality
function calculateResult(){
inputFieldE1.value = eval(inputFieldE1.value);

}

// This will evaluate the expression in the input field and display the result
function appendValue(buttonValue){
    // inputFieldE1.value= inputFieldE1.value + buttonValue;
    inputFieldE1.value += buttonValue;
}

// adding delete functionality
function deleteLastDigit(){
    inputFieldE1.value=inputFieldE1.value.slice(0,-1);
    // This will remove the last character from the input field
}
