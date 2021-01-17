// Página: https://courseit.io/
// Título: Invertir Array
// Descripción: Vamos a recibir un array, y debemos invertirlo

function reverseArray(arr) {
    let newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        newArr.push(arr[arr.length - i]);
    }
    return newArr;
}

arr = [1, 2, 3, 4];
console.log(reverseArray(arr));
