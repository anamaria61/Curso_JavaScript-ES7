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

//unidades soportadas
const unidadesTemperatura = ["c", "f", "k"]; //Crear un array con las unidades necesarias
const unidadesLongitud = ["m", "km", "cm"];

// CONVERTIR A NUMERO 
// VALIDAR QUE SEA UN NUMERO FINITO 
function validarValor(valor){
        const numero = Number(valor);
    if (!Number.isFinite (numero)) { // Si el numero NO es finito  LANZA ERROR
        throw new Error("Valor inválido: debe ser un número finito");
    }
    return numero;
}

function validarUnidad(unidad) { //Validar unidad
    unidad = unidad.toLowerCase() //este metodo ayuda a diferenciar entre mayúsculas y minúsculas
    if (!unidadesTemperatura.includes(unidad) && !unidadesLongitud.includes(unidad) //comprobar si el valor existe
    ) {
        throw new Error("Error: unidad no soportada")
    }   
    return unidad;
}

// Obtener el tipo de categoria
function obtenerCategoria(unidad) {
    if (unidadesTemperatura.includes(unidad)) {
        return "temperatura";
    }

    if (unidadesLongitud.includes(unidad)) {
        return "longitud";
    }
    throw new Error("Error de categoría.");
}

// Conversion de temperaturas
function convertirTemperatura(valor, from, to) {
    let celsius;
    //Convierto primero a Celsius
    if (from === "c") celsius = valor;
    else if (from === "f") celsius = (valor -32) * 5/9;
    else if (from === "k") celsius = valor - 273.15;

    //Convierto de celsius a las demás unidades
    if (to === "c") return celsius;
    else if (to === "f") return (celsius * 9/5) + 32;
    else if (to === "k") return (celsius + 273.15);
    //Si no se cumple ninguna condición se lanza un error
    throw new Error("Error en conversión de temperatura");
} 

// Comversión de longitudes
function convertirLongitud(valor, from, to) {
   let metros;
    //Convierto primero a metros
    if (from === "m") metros = valor;
    else if (from === "km") metros = (valor * 1000);
    else if (from === "cm") metros = valor / 100;

    //Convierto de metros a las demás
    if (to === "m") return metros;
    else if (to === "km") return metros / 1000;
    else if (to === "cm") return (metros * 100);

    throw new Error("Error en conversión de longitud");
}

//Función principal--la de la lógica
function convertir(valor, from, to){

const numero = validarValor(valor);
const unidad1 = validarUnidad(from); //Esta unidad es la unidad que se desea cambiar
const unidad2 = validarUnidad(to); //Esta es la unidad final

const categoria1 = obtenerCategoria(unidad1); //Categoriza inicial
const categoria2 = obtenerCategoria(unidad2); //Categoria final

//Validación para que no se mezclen las categorías
if (categoria1 !== categoria2) { //Esta es una desigualdad estricta, comprueba si los valores son iguales o no
    throw new Error("No se pueden mezclar categorías (temperatura con longitud)")
}

if (categoria1 === "temperatura") {
    return convertirTemperatura(numero, unidad1, unidad2);
}
if (categoria1 === "longitud") {
    return convertirLongitud(numero, unidad1, unidad2);
}
}

//Pruebas temperatura
try {
console.log(convertir(100, "c", "f").toFixed(2), "F");
console.log(convertir(32, "f", "c").toFixed(2), "C");
console.log(convertir(0, "c", "f").toFixed(2), "F");
console.log(convertir(-40, "c", "f").toFixed(2), "F");
console.log(convertir(40, "c", "k").toFixed(2), "K");
console.log(convertir(28, "k", "c").toFixed(2), "C");
} catch (error) {
    console.error(error.message);
}

//Pruebas Longitud
try {
console.log(convertir(1500, "m", "km").toFixed(2), "km");
console.log(convertir(20, "cm", "m").toFixed(2), "m");
console.log(convertir(55, "km", "m"), "m");
console.log(convertir(1.2, "km", "m").toFixed(2), "m");
} catch (error) {
    console.error(error.message);
}

//Pruebas de errores
try{
    console.log(convertir("abc", "cm", "km"));
 } catch (error) {
    console.error(error.message);
 }
 try{
    console.log(convertir(10, "kg", "g"));    
 } catch (error) {
    console.error(error.message);
 }
 try{  
    console.log(convertir(10, "c", "m"));
 } catch (error) {
    console.error(error.message);
 }
 /**Hice varios try..catch porque al aparecer un error el código se teniene
  *  y no permite que las demás línes se ejecuten
  */
 
 

