// 7. SUMAR NÚMEROS CON REDUCE
// Usar reduce parta obtener la suma total del arreglo
const numeros = [5, 10, 15, 20];
const suma = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(suma)
//Usé (acc, numero) porque estoy sumando el primer elemento del array con el siguiente,
// incrementando los demás elementos, esta suma total comienza desde la posición 0

// 8. MULTIPLICAR TODOS LOS NÚMEROS CON REDUCE
// Usar reduce para obtener el producto total
const cifras = [2, 3, 4];
const multiplicacion = cifras.reduce((total, cifra) => total * cifra);
console.log(multiplicacion)
//Usé (total, cifra) porque estoy multiplicando los elementos del array, uno por uno

// 9. CONTAR TOTAL DE LETRAS CON REDUCE
// Calcula cuántas letras hay en total sumando la longitud de cada palabra
const palabras = ["hola", "mundo", "js"];
const total = palabras.reduce((acc, palabra) => acc + palabra.length, 0);
console.log(total)
//Usé (acc, palabra) porque estoy sumando las letras del primer elemento del array con el siguiente,
// incrementando los demás elementos, esta suma de letras comienza desde la posición 0
