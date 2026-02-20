// Const y Let

const fruta ={ name: "Banano"};
fruta.name = "Fresa"
console.log(fruta.name)

const autos ={ name: "BMW"};
autos.name = "Mazda"
console.log(autos.name)


let k = 55;
k = 30;
console.log(k)

let f = 123;
f = 321;
console.log(f)

// Coerción implícita

console.log("mesa" + "silla");
console.log("25" - 10);

// Coerción explícita

const valor = 101;
const str = String(valor);
console.log(str);

// Template Strings

let dispositivo = "computador";
let marca = "Lenovo";
let precio = 2200000;
console.log(`El ${dispositivo} ${marca} tiene un costo de ${precio} pesos.`);


//Control de flujo

const peso = 60;
if (peso >= 60) {
    console.log("Estas en un peso normal")
}
else {
    console.log("Estas en desnutrición")
}

// For loops

const carros = ["BMW ", "Ford ", "Kia ", "Chevrolet ", "Hyundai ", "Toyota"]
let carroscaros = "";

for (let i = 0; i < carros.length; i++) {
    carroscaros += carros[i]
}

console.log(`Los carros más costosos son: ${carroscaros}`);


