function performOperation(){
    // avoir les valeurs des inputs
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    if(!isNaN(input1) && !isNaN(input2)){
       let result = multiply(input1, input2);

       displayResult(result);
    }else{
        displayResult('Please enter valid numbers.');
    }
}

function multiply(num1, num2){
    // Introduce a debugger to pause execution
    debugger;
    // multiply the numbers
    return num1 * num2;
}

function displayResult(result){
    // display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}