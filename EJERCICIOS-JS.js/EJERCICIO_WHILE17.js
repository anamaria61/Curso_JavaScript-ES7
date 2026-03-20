/** 17. CONTAR DEL 10 AL 1 CON WHILE
Usa while para mostrar una cuenta regresiva desde 10 hasta 1. 
Al final imprime: 
"¡Despegue!" 
 */

let contador = 10; // Poisición inicial
while (contador >= 1) {
  //mientras el contador sea mayor o igual a 1 se realiza el ciclo
  console.log(contador);
  contador--; // restar 1 en cada vuelta, para llegar al 1
}
console.log("Despegue!");
