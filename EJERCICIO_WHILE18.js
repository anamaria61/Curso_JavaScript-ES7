/** 18. SUMAR NÚMEROS HASTA LLEGAR A 100 CON WHILE
 Crea un programa que vaya sumando números consecutivos comenzando en 1 hasta que la suma 
sea mayor o igual a 100. 
Debes mostrar: 
 cada número sumado 
 la suma final 
 cuántos números fueron necesarios
 */

numero = 1
suma = 0
cantidad = 0
while (suma <= 100) { // La suma debe seguir mientras el resultado sea menor o igual a 100
    suma = suma + numero //se suma el número de la primer posición con el siguiente
    console.log(suma) // se muestra la suma entre los números
    cantidad ++ // acá va aumentando la cantidad, para saber cuántos números usé
    numero ++ //acá va aumentando el número
}
    console.log("Suma final:", suma)
    console.log("Cantidad de números usada:", cantidad)

/** 19. EJERCICIO COMBINADO: FILTER + MAP
 1) Filtra solo los números mayores que 10
 2) Luego multiplícalos por 2
 */

 const cifras = [3, 8, 15, 20, 7, 12, 1, 30];
 const n_mayores = cifras.filter((cifra) => cifra > 10);
 console.log(n_mayores)
 // Usé el método filter para poder mostrar los números mayores a 10, con ayuda a la condición > 10

 const n_multiplicar = n_mayores.map((n_mayor) => n_mayor * 2);
 console.log(n_multiplicar)
 // Usé el método map para poder multiplicar los números mayores por 2