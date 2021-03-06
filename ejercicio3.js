var coches = [
  ['seat', 'Codoba', 1997, 10000],
  ['Kia', 'Sorento', 1994, 1000],
  ['seat', 'Todelo', 2000, 10000],
  ['Fiat', 'Bravo', 2010, 10200],
  ['Fiat', '500', 2010, 10000],
  ['Mercedes', 'Calse B', 2001, 39000],
  ['seat', 'Ibiza', 1993, 10100],
  ['Alfa Romeo', 'Julieta', 2002, 10000],
  ['Alfa Romeo', '159', 2002, 10400],
  ['Mercedes', 'Calse C', 2001, 1000],
  ['Alfa Romeo', '147', 1990, 10500],
  ['Fiat', 'Punto', 1990, 999],
  ['Citroen', 'Saxo', 1980, 10300],
  ['Renault', 'Superc 5', 1980, 12000],
  ['BWM', 'M3', 2020, 1000],
  ['Kia', 'Picanto', 1990, 1000],
  ['Alfa Romeo', 'spider', 1970, 14500],
  ['Mercedes', 'Calse A', 1994, 60100],
  ['Mercedes', 'Calse D', 2011, 21221],
];

function comparar(precioA, precioB) {
  if (precioA[3] < precioB[3]) return 1;
  if (precioA[3] > precioB[3]) return -1;
  return 0;
}

//1.Filtrar coches y quitar marca Kia y Alfa Romeo aparte que sean más viejos que 20 años, es decir del 2001

//1.1-Función normal

function listaFiltradaOrdinaria() {
  let arrayNuevaFiltrada = [];
  for (let i = 0; i < coches.length; i++) {
    if (
      coches[i][0] != 'Kia' &&
      coches[i][0] != 'Alfa Romeo' &&
      coches[i][2] < 2001
    ) {
      arrayNuevaFiltrada.push(coches[i]);
    }
  }
  console.log('MUESTRA TABLA FILTRADA POR FUNCIÓN ORDINARIA');
  console.table(arrayNuevaFiltrada);
}

listaFiltradaOrdinaria();

//1.2-Función flecha

let listaFiltradaFlecha = coches.filter(coche => {
  let condicion =
    coche[0] != 'Kia' && coche[0] != 'Alfa Romeo' && coche[2] < 2001;
  return condicion;
});
console.log('MUESTRA TABLA FILTRADA POR FUNCIÓN FLECHA');
console.table(listaFiltradaFlecha);

//1.3-Función anónima

let listraFiltradaAnonima = coches.filter(function (coche) {
  let condicion =
    coche[0] != 'Kia' && coche[0] != 'Alfa Romeo' && coche[2] < 2001;
  return condicion;
});

console.log('MUESTRA TABLA FILTRADA POR FUNCIÓN ANONIMA');
console.table(listraFiltradaAnonima);

//2.Ordena los coches por precio

//2.1-Función normal

function listaOrdenadaOrdinaria() {
  let arrayNueva = [];
  for (let i = 0; i < coches.length; i++) {
    arrayNueva[i] = coches[i].slice();
  }
  let nuevoArray = arrayNueva;
  nuevoArray.sort(comparar);

  return nuevoArray;
}
console.log('MUESTRA TABLA ORDENADA POR FUNCIÓN ORDINARIA');
console.table(listaOrdenadaOrdinaria());

listaOrdenadaOrdinaria();

//2.2-Función flecha

let listaOrdenadaFlecha = coches.sort((precioSuperior, precioInferior) => {
  let resta = precioInferior[3] - precioSuperior[3];
  return resta;
});

console.log('MUESTRA LA TABLA ORDENADA POR FUNCIÓN FLECHA');
console.table(listaOrdenadaFlecha);

//2.3-Función anónima

let listaOrdenadaAnonima = coches.sort(function (
  precioSuperior,
  precioInferior
) {
  let resta = precioInferior[3] - precioSuperior[3];
  return resta;
});

console.log('MUESTRA LA TABLA ORDENADA POR FUNCIÓN ANÓNIMA');
console.table(listaOrdenadaAnonima);

//3.Retorna con un 20% de descuento.

//3.1-Función normal

function listaDescuentoOrdinaria() {
  let arrayNuevaDescuento = [];
  for (let i = 0; i < coches.length; i++) {
    let rebaja = coches[i][3] - coches[i][3] * 0.2;
    arrayNuevaDescuento = [coches[i][0], coches[i][0], coches[i][2], rebaja];
  }
  console.log(
    'MUESTRA LA TABLA CON EL PRECIO DESCONTADO UN 20% CON FUNCIÓN ORDINARIA'
  );
  console.table(arrayNuevaDescuento);
}
listaDescuentoOrdinaria();

//3.2-Función flecha

let listaDescuentoFuncionFlecha = coches.map(coche => {
  let rebaja = coche[3] - coche[3] * 0.2;
  let mostrarCoches = [coche[0], coche[1], coche[2], rebaja];
  return mostrarCoches;
});

console.log(
  'MUESTRA LA TABLA CON EL PRECIO DESCONTADO UN 20% CON FUNCIÓN FLECHA'
);
console.table(listaDescuentoFuncionFlecha);

//3.3-Función anónima

let listaDescuentoFuncionAnonima = coches.map(function (coche) {
  let rebaja = coche[3] - coche[3] * 0.2;
  let mostrarCoches = [coche[0], coche[1], coche[2], rebaja];
  return mostrarCoches;
});

console.log(
  'MUESTRA LA TABLA CON EL PRECIO DESCONTADO UN 20% CON FUNCIÓN ANÓNIMA'
);
console.table(listaDescuentoFuncionAnonima);
