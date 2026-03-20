// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * CONVIERTE A NUMERO Y VALIDA QUE SEA UN NUMERO FINITO MAYOR O IGUAL A CERO
 * lANZA UN ERROR SI LA VALIDACION FALLA
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // SI EL NUMERO NO ES FINITO O ES MENOR QUE CERO, LANZA UN ERROR
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 
// Si el numero no finito o es menor que cero se lanza el error  de monto inválido 



// MODELAR DATOS DE INGRESOS Y GASTOS
const ingresos = [ // se crea un array de objetos los cuales tienen una clave y un valor
    { concepto: "Salario", monto: 5000000 }, // Salario es la clave y 5000000 es el valor 
    { concepto: "Freelance", monto: 1500000 }, 
];
// en este bloque se crea la lista de ingresos
 

const gastos = [ //array de 3 objetos
    { concepto: "Alquiler", monto: 1200000 }, 
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];
// en este bloque se crea la lista de gastos


// CALCULAR TOTALES
function calcularTotal(items) { 
    let total = 0;
    for (const item of items) { // RECORRE CADA ITEM EN LA LISTA DE INGRESOS O GASTOS
        total += validarMonto(item.monto); // VALIDA CADA MONTO ANTES DE SUMARLO AL TOTAL
    }
    return total;
}
//se define la funcion  calcularTotal tomando como parámetro los items de las anteriores
// valida cada uno de los montos y lo suma de uno en uno

const totalIngresos = calcularTotal(ingresos); //se define la variable totalIngresos-- obteniendo un total de 6500000
const totalGastos = calcularTotal(gastos); //se define la variable totalGastos-- obteniendo un total de 2300000
const balance = totalIngresos - totalGastos; 
 /*vuele a llamar la función anterior usando como parámetro los datos de la lsita ingresos
  *llama la función calcularTotal usando como paráetro los datos de la lista gastos
 *se define la variable balance dando un total de 4200000
*/

// CLASIFICAR ESTADO FINANCIERO
function getEstadoFinanciero(balance) { 
    if (balance > 0) { 
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}
/*//Se define esta función, que ayuda a ver el estado finaciero en el que se encuentra la persona, 
  llamando el parámetro balance 
*/

function recomendacion(estado) { 
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return ""; //si NO cumple ninguna de las condiciones anteriores el sistema retorna un espacio en blanco 
    }
}
/*Se crea la funcion recomendacion para dar un mensaje según el estado en que se encuentre la persona
*Se usa la estructura de control switch, la cual va retornando según la clasificación de los estados anteriores 
*/


// MOSTRAR REPORTE EN CONSOLA

console.table(ingresos); //se usa para ver la lista de los ingresos en una tabla
console.table(gastos); //se usa para ver la lista de los gastos en una tabla

console.group ("Resumen Financiero"); //se crea el método console.group para agrupar mensajes en la consola
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd(); //se cierra la agrupación
/*Se usan estos métodos para hcer el código más legiible */