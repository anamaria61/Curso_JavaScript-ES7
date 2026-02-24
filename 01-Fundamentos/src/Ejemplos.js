// Const y Let

const fruta ={ name: "Banano"}; // NO se puede reasignar la variable
fruta.name = "Fresa" // Se modifica el objeto
console.log(fruta.name)

const autos ={ name: "BMW"};
autos.name = "Mazda"
console.log(autos.name)


let k = 55; // Inicialmete es 55
k = 30; /// Pero se reasigna el valor 
console.log(k)

let f = 123;
f = 321;
console.log(f)

// Coerción implícita

console.log("mesa" + "silla"); // Concatena los valores
console.log("25" - 10); // Java automaticamente pasa de string a number 

// Coerción explícita

const valor = 101; // pasa de number a string
const str = String(valor);
console.log(str);

// Template Strings

let dispositivo = "computador";
let marca = "Lenovo";
let precio = 2200000;
console.log(`El ${dispositivo} ${marca} tiene un costo de ${precio} pesos.`); // ${} permiten insertar variables o expresiones dentro del texto 


//Control de flujo
let peso = 60;        // en kilogramos
let estatura = 1.64;  // en metros

let imc = peso / (estatura * estatura); //eso da como resultado 22.31

console.log(`Mi IMC es: ${imc.toFixed(2)}`); //se redondea a 2 decimales

if (imc < 18.5) {
    console.log("Estás en bajo peso");
    //condición1 falsa no es menor que 18.5
} 
else if (imc >= 18.5 && imc < 25) {  // 22.31 es mayor a 18.5 y menor que 25?
    console.log("Tienes un peso normal");
    //condicion1 es falsa y condicion2 es verdadera
} 
else if (imc >= 25 && imc < 30) {  // 22.31 es mayor 25 y menor que 30?
    console.log("Tienes sobrepeso");
    //condicion2 es falsa y condicion3 es falso
} 
else {
    console.log("Tienes obesidad");
} 


// For loops

const carros = ["BMW ", "Ford ", "Kia ", "Chevrolet ", "Hyundai ", "Toyota"] //crear un arreglo de marcas 
let carrosr = ""; //va concatenando cada elemento en carrosr

for (let i = 0; i < carros.length; i++) { //recorre este arreglo con un for
    carrosr += carros[i]
}

console.log(`Los carros más reconocidos son: ${carrosr}`);


