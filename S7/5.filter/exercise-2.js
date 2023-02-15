const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function edadPar(edad) {
  return Number.isInteger(edad / 2);
}
const pares = ages.filter(edadPar);
console.log(pares);
