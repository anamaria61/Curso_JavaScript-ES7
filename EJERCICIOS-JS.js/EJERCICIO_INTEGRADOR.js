/** 20. EJERCICIO INTEGRADOR: FILTER + SORT + MAP + REDUCE
 Realiza lo siguiente:
 1) Filtra los productos cuya cantidad sea mayor o igual a 2
 2) Ordénalos de mayor a menor según el precio
 3) Crea un nuevo arreglo con frases como:
    "Teclado-Total:240000"
 4) Calcula con reduce el valor total de las ventas
 */

const ventas = [
    {producto: "Mouse", cantidad: 3, precio: 50000},
    {producto: "Teclado", cantidad: 2, precio: 120000},
    {producto: "Monitor", cantidad: 1, precio: 800000},
    {producto: "USB", cantidad: 5, precio: 30000},
];

/// 1 ///
console.log("LOS PRODUCTOS CON CANTIDADES MAYORES O IGUALES A 2 SON:")
const cantidades = ventas.filter((venta) => venta.cantidad >= 2);
console.log(cantidades)
// Con filter le asigno una condición donde la cantidad de productos debe ser mayor o igual a 2
// Y así poder mostrar esos datos

/// 2 ///
console.log("EL ORDEN DE LOS PRECIOS DE MAYOR A MENOR ES:")
const orden_v = ventas.sort((a, b) => b.precio - a.precio); 
console.log(orden_v)
//Aquí se comparan los precios, 
// donde si el resultado es negativo a va primero, 
// de lo contrario(si es positivo) b va de primeras (mayor a menor) 

/// 3 ///
console.log("EL NUEVO ARRAY ES:")
const frases = ventas.map(venta => { //recorre el array crando uno nuevo 
    return (`${venta.producto}-Total:${venta.cantidad * venta.precio}`)
})
console.log(frases)
// En este punto uso el signo $ para interpolar la línea de código

/// 4 ///
console.log("EL VALOR TOTAL DE LAS VENTAS ES:")
const total_ventas = ventas.reduce((acc, venta) => acc + venta.precio, 0);
console.log(total_ventas)
//Acá se va incrementando elemento por elemento,
// para sumar cada precio y sacar un total 