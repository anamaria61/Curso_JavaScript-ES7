// 1. DUPLICAR NÚMEROS CON MAP
// Crear un nuevo arreglo donde cada número esté multiplicado por 2.

const numeros = [2, 4, 6, 8, 10];
const doble = numeros.map((num) => num * 2);
console.log(doble);

// 2. CONVERTIR NOMBRES A MAYÚSCULAS CON MAP
// Crear un nuevo arreglo con todos los nombres en mayúsculas
const nombres = ["ana", "luis", "marta", "pedro"];
const nom_mayus = nombres.map(nombre => nombre.toUpperCase())
console.log(nom_mayus)
// Usé este método toUpperCase(), el cual recorre el array original, 
// creando uno nuevo con los nombres en mayúsculas


// 3. OBTENER LONGITUDES DE PALABRAS CON MAP
// Generar un arreglo con la longitud de cada palabra
const palabras = ["sol", "computador", "mesa", "javascript"];
const longitudes = palabras.map(palabra => palabra.length);
console.log(longitudes)
// Usé la propiedad length porque cuenta la cantidad caracteres de una cadena