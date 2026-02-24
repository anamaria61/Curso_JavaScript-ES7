// CONVERSOR DE UNIDADES (TEMPERATURA/LONGITUD) CON VALIDACIONES

/* TEMPERATURA 
*Celsius -> Farenheit
*Farenheit ->Celsius
*Celsius -> Kelvin
*/

/*LONGITUD
 * Metros -> Kilometros
 * Kilometros -> Metros
 * Centímetros -> Metros 
 */

"use strict"; //Directiva que permite activar el modo estricto, el cual mejora la seguridad del código

// CONVERTIR A NUMERO 
// VALIDAR QUE SEA UN NUMERO FINITO IGUAL O MAYOR A 0
function validarUnidad(unidad){
        const numero = Number(unidad);
    if (!Number.isFinite (numero) || numero < 0) { // Si el numero NO es finito o es Menor que cero LANZA ERROR
        throw new Error("Unidad inválida: debe ser un número finito mayor o igual a cero");
    }
    return numero;
}

/**
 * MODELAR DATOS TEMPERATURA Y LONGITUD
 */
const temperatura = [
    { unidades: "Celsius(C°)", unidad: 10},
    { unidades: "Farenheit(F)", unidad: 32},
    { unidades: "Kelvin (K)", unidad: 4},
];


const longitud = [
    { unidades: "Metros (m)", unidad: 9},
    { unidades: "Kilómetros (km)", unidad: 8},
    { unidades: "Centímetros (cm)", unidad: 5}
];

console.table(temperatura);
console.table(longitud);

