function performOperation() {
  // avoir les valeurs des inputs
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);

  if (!isNaN(input1) && !isNaN(input2)) {
    const multiply_result = multiply(input1, input2);
    const sumation_result = addition(input1, input2);
    const subtraction_result = subtraction(input1, input2);
    const division_result =
      input2 === 0 ? "La division par zero est impossible." : division(input1, input2);
    const mudulo_result = mudulo(input1, input2);

    displayResult({
      multiply_result,
      sumation_result,
      subtraction_result,
      division_result,
      mudulo_result,
    });
  } else {
    displayResult("Veillez inserer un nombre valide.");
  }
}

function multiply(num1, num2) {
  // Introduce a debugger to pause execution
  debugger;
  // multiply the numbers
  return num1 * num2;
}

function addition(num1, num2) {
  // add the numbers
  return num1 + num2;
}

function subtraction(num1, num2) {
  // subtract the numbers
  return num1 - num2;
}

function division(num1, num2) {
  // divide the numbers
  return num1 / num2;
}

function mudulo(num1, num2) {
  // divide the numbers
  return num1 % num2;
}

function displayResult(result) {
  const resultElement = document.getElementById("result");
  if (typeof result === "string") {
    resultElement.innerText = result;
    return;
  }
  const {
    multiply_result,
    sumation_result,
    subtraction_result,
    division_result,
    mudulo_result,
  } = result;

  resultElement.innerText = `Le produit est de : ${multiply_result}
La somme est de : ${sumation_result}
Le reste est de : ${subtraction_result}
Le quotient est de : ${division_result} 
Le reste de la division est de : ${mudulo_result}`;
}
