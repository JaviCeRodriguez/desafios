// Página: https://courseit.io/
// Título: Eliminar 13
// Descripción: Vamos a recibir un array, tenemos que eliminar todos los múltiplos de 13 y devolver el array

function removeThirteen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 != 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const arr = [1, 5, 2, 20, 13, 26, 13, 2, 3, 9, 26];
console.log(removeThirteen(arr));
