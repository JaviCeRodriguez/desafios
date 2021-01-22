// Página: https://courseit.io/
// Título: Calculadora básica
// Descripción: Queremos que la función basicCalculator, recibiendo: un número, un operador ('+', '-', '*', '/'),
// y otro número, resuelva la cuenta ingresada

function basicCalculator(firstNumber, operator, secondNumber) {
    let result = 0;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
    }

    return result;
}

// Cumple con la consigna, pero debería tenerse en cuenta otras situaciones!
