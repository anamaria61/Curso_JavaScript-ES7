// 10. ORDENAR NÚMEROS ASCENDENTEMENTE CON SORT
// Ordénalos de menor a mayor
const numeros = [45, 12, 78, 3, 19, 1];
const ascendentes = numeros.sort((a, b) => a - b); // función de comparación ((a, b) => a - b)
console.log(ascendentes);
/**
 * Usé este método .sort() con la función de comparación para que pueda ordenar númericamente
 * los elementosdel array de lo contrario, sin esta función los números se convierten en cadenas de texto
esta flecha le dice a sort como debe de ordenar el array
si el resultado es negativo a va de primeras
si el resultado es positivo b va de primeras
 */

// 11. ORDENAR NÚMEROS DESCENDENTEMENTE CON SORT
//Usar el mismo arreglo anterior y ordenalo de mayor a menor
const descendentes = numeros.sort((a, b) => b - a);
console.log(descendentes);
/**
si el resultado es negativo a va de primeras
si el resultado es positivo b va de primeras
b - a ordena de menor a mayor; en cambio a - b ordena de mayor a menor
 */

// 12. ORDENAR NOMBRES ALFABÉTICAMNETE CON SORT
// Ordénalos alfabéticamente
const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
const alfa = nombres.sort();
console.log(alfa);
// Este cóidigo es similar a los anteriores solo que dejé el método sort solo,
// ya que los elementos del array son cadenas de texto, no números

// 13. ORDENAR PRODUCTOS POR PRECIO CON SORT
// Ordénalos del más barato al más caro
const productos = [
  { nombre: "Teclado", precio: 120000 },
  { nombre: "Mouse", precio: 50000 },
  { nombre: "Monitor", precio: 800000 },
  { nombre: "USB", precio: 30000 },
];
const valor = productos.sort((a, b) => a.precio - b.precio);
console.log(valor);
//Usé a.precio, porque es el valor que hay dentro del objeto(a),
//aquí vuelvo a hacer la compració de antes si es negativo a va primero y
// si es positivo b va primero. El método sort permite leer y organizar el array,
//para ordenarlo de una manera específica hay que darle ciertas indicaciones de comparación
