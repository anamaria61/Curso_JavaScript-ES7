"use strict";

//Funciones setup + validaciones base
function toNumeberString(value, label = "valor") {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`El ${label} debe ser un número`);
  }
  return n;
}

function asserNonNegative(value, label = "Valor") {
  if (value < 0) {
    throw new Error(`El ${label} debe ser un número positivo`);
  }
}

function toNonEmpyString(value, label = "Valor") {
  const s = String(value).trim();
  if (s.length === 0) {
    throw new Error(`El ${label} no puede ser una cadena vacía`);
  }
  return s;
}

//Paso Dataset de ejemplo + normalizacion

function normalizeExpense(raw) {
  const id = toNonEmpyString(raw.id, "ID");
  const fecha = toNonEmpyString(raw.fecha, "FECHA");
  const categoria = toNonEmpyString(raw.categoria, "CATEGORIA");
  const descripcion = toNonEmpyString(raw.descripcion, "DESCRIPCION");
  const monto = toNumeberString(raw.monto, "MONTO");
  asserNonNegative(monto, "MONTO");
  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}
const expenses = [
  normalizeExpense({
    id: "e1",
    fecha: "2024-06-01",
    categoria: "Alimentación",
    descripcion: "Compra en el supermercado",
    monto: "850000",
  }),
  normalizeExpense({
    id: "e2",
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: "150000",
  }),
  normalizeExpense({
    id: "e3",
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada a cine",
    monto: "500000",
  }),
  normalizeExpense({
    id: "e4",
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: "200000",
  }),
  normalizeExpense({
    id: "e5",
    fecha: "2024-02-05",
    categoria: "Educacion",
    descripcion: "Curso en linea",
    monto: "120000",
  }),
  normalizeExpense({
    id: "e6",
    fecha: "2024-06-30",
    categoria: "Alimentación",
    descripcion: "Venta en el supermecado",
    monto: "700000",
  }),
  normalizeExpense({
    id: "e7",
    fecha: "2024-05-04",
    categoria: "Transporte",
    descripcion: "Pasaje en el taxi",
    monto: "100000",
  }),
  normalizeExpense({
    id: "e8",
    fecha: "2024-07-04",
    categoria: "Entretenimiento",
    descripcion: "Parque de diversion",
    monto: "560000",
  }),
  normalizeExpense({
    id: "e9",
    fecha: "2024-10-09",
    categoria: "Salud",
    descripcion: "Pago hospitalizacion",
    monto: "300000",
  }),
  normalizeExpense({
    id: "e10",
    fecha: "2024-11-05",
    categoria: "Educacion",
    descripcion: "Compra utiles",
    monto: "135000",
  }),
];

// Paso 3 Estadisticas basicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto); //[montos]
  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;//length es la cantidad de elementos que hay

  return { total, promedio, maximo, minimo, promedio };
}

// totales por categoria

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto; // Si no existe la categoria, se inicializa en 0 y
    // se le suma el monto del gasto actual
    return acc;
  }, {});
}

// Reporte en consola

function formatCOP(value) { //convertir un número en formato de moneda colombiana (COP).
  return new Intl.NumberFormat("es-CO", { //Esta es una herramienta que formatea números según el país o idioma- en este caso español-Colombia
    style: "currency", //indica que el número será moneda
    currency: "COP", //Esta monbeda será peso colombiano
    maximumFractionDigits: 0, //esto permite no mostrar los decimales
  }).format(value); //apolica el formato al número ingresado
}

function printReport(expenses) { //Esta función imprime el reporte de los gastos
  const stats = calStats(expenses); //esta funcion calcula el total, promnedio y demás, el resultado se guarda en la variable stats
  const byCat = totalByCategory(expenses); //esta funcion guarda el gasto en cada categoria

  console.group("REPORTE - ANALIZADOR DE GASTOS"); //agrupa los mensajes en la consola
  console.log("Resumen: ");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);

  // Totales por categoria
  console.log("Totales por categoria: ");
  console.table(
    Object.entries(byCat).map(([categoria, total]) => ({ //Object-> objeto en un array -- 
    // map trasnforma cada elemento, convirtiendolo en nuevo array
      Categoria: categoria, //cada elemento tiene una categoria y un total
      Total: formatCOP(total),
    })),
  );
  console.groupEnd(); //cierra el grupo de consola
}
printReport(expenses); //llama la función y genera todos los arrays en la consola mediante una tabla

//Gasto más alto
const expenseMayor = expenses[0]; //Aca se guarda el primer valor como el mayor
for (let i = 1; i < expenses.length; i++) {
  if (expenses[i].valor > expenseMayor.valor) {
    expenseMayor = gastos[i];
  } //Se actualiza el gasto mayor
}
console.log("El gasto más alto es:"); //escribe el array completo
console.table(expenseMayor);
//for recorre el arrray
//empieza desde la posición 1 del array
//se ejecuta mientras i sea menor al valor del array y ++ aumenta en cada "vuelta"
//Compara los valores, diciendo El gasto actual es igual al gasto que esta guardado ?

// Detalle de los últimos gastos

const ultimosexpenses = expenses.slice(-4); //-4, solamente cuenta los ultimos  cuatro datos registrados
console.log("Estos son los últimos gastos realizados");
console.table(ultimosexpenses);