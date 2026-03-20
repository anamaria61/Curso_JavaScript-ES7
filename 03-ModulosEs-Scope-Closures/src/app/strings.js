//FUNCION toNonEmptyString, PERMITE VALIDAR SI UN STRING NO ESTÁ VACÍO, SI LO ESTÁ LANZA UN ERROR

// function toNonEmptyString(value, label = "Valor") { //value es el dato que se quiere pasar a texto
//   const s = String(value).trim(); //trim() elimina los espacios que tenga la cadena
//   if (s.length === 0) {
//     //si s es igual a 0, es decir no tiene caracteres:
//     throw new Error(`El ${label} no puede ser una cadena vacía`); //se lanza este error
//   }
//   return s;
// } // label es el "nombre" opcional del parámetro, sino se envia este por defecto será Valor

  const nombre = "Ana"
  const edad = 16
function toNonEmptyString(value, label = "error") {

}
  

//FUNCION titleCase, PERMITE CONVERTIR STRING A TÍTULO

 export function titleCase(text) {  // "hola mundo" -> "Hola Mundo"
    return text.toLowerCase()// Convertir a minúsculas Hola Mundo -> hola mundo
        .split(' ') // Dividir en palabras hola mundo -> ["hola", "mundo"]
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar la primera letra de cada palabra
        .join(' '); // Unir las palabras de nuevo en una cadena
}

//FUNCION slugify, PERMITECONVERTIR UN STRING A SLUG EJEMPLO:
// "hola mundo" - "hola-mundo"