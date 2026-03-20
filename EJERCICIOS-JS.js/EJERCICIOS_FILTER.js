// 4. FILTRAR NÚMEROS PARTES CON FILTER
// Crear un nuevo arreglo solo con los números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => numero % 2 == 0);
console.log(pares);
//Usé el modulo(%), este es el residuo de la división entre
// el elemento del array y 2, si da 0 es un número par

// 5. FILTRAR PALABRAS LARGAS CON FILTER
// Obtén solo las palabras que tengan más de 5 letras
const palabras = ["casa", "ventana", "sol", "computador", "luz"];
const letras = palabras.filter((palabra) => palabra.length >= 5);
console.log(letras);
// Usé la propiedad length porque cuenta la cantidad caracteres de una cadena

// 6. FILTRAR ESTUDIANTES APROBADOS POR FILTER
// Obtén un nuevo arreglo con los estudiantes cuya nota sea mayor o igual a 3.0
const estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 2.8 },
  { nombre: "Martha", nota: 3.7 },
  { nombre: "Carlos", nota: 2.5 },
];
const notas = estudiantes.filter((estudiante) => estudiante.nota >= 3.0);
console.log("Los estudiantes que aprobaron son:");
console.log(notas);
//Usé la condición >= ya que permite leer los datos que la cumplan,
//mostrando los estudiantes aprobados
