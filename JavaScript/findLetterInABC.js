// Página: https://courseit.io/
// Título: Encontrar letra en el abecedario
// Descripción: Encontrar la letra en el abecedario (sin ñ) según el número, si no se encuentra devolver el string 'invalid'

function positionInAlphabet(num) {
    const abc = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    return abc[num - 1] === undefined ? "invalid" : abc[num - 1];
}

console.log(positionInAlphabet(1)); // a
console.log(positionInAlphabet(26)); // z
console.log(positionInAlphabet(27)); // invalid
