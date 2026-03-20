/** 16. TABLA DEL 5 CON WHILE
Usa un ciclo while para imprimir la tabla del 5 desde: 
5 x 1 = 5 
hasta: 
5 x 10 = 50
 */
let contador = 1; // esta variable debe ser let, ya que el contador debe cambiar dentro del while
const tabla = 5;
let i = tabla * contador;
while (contador <= 10) {
  //repetir mientras el contador sea menor a 10
  i = tabla * contador; // la variable "i" es el resultado de la operación (5 * 1 = 5)
  console.log("5 *", contador, "=", i); //Aquí imprimo la estructura de la tabla
  contador++; //Esto aumenta el contador de 1 en 1, sin esto el ciclo no avanza
}
// El ciclo while es un bucle que ayuda a aumentar valores o repetirlos las veces que sean necesarias
