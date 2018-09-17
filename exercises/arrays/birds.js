/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:
// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.
// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
// 3. Array de nombres de los pájaros de la familia "Tirannydae".
// 4. Cantidad de pájaros de la familia "Furnaridae".

console.log("1. Array de nombres de todos los pájaros ordenados alfabéticamente.");
const birdsNames = birds.sort((bird1, bird2) => bird1.name > bird2.name).map(b => b.name);
console.log(birdsNames);

console.log("2. Obtener el objeto completo del que tiene nombre \"Zorzal Colorado\".");
const zorzal = birds.find(bird => bird.name === "Zorzal Colorado");
console.log(zorzal);

console.log("3. Array de nombres de los pájaros de la familia \"Tirannydae\"");
const tirannydaeFamily = birds.filter(bird => bird.family === "Tirannydae").map(bird => bird.name);
console.log(tirannydaeFamily);

console.log("4. Cantidad de pájaros de la familia \"Furnaridae\"");
const furnaridaeQty = birds.filter(bird => bird.family === "Furnaridae").length;
console.log(furnaridaeQty);

const furnaridaeQtyReduce = birds.reduce((acc, currVal) => {
  return acc + (currVal.family === "Furnaridae" ? 1 : 0);
}, 0);
console.log(furnaridaeQtyReduce);