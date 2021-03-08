/*============================================
ANCHOR Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
=============================================*/

let arr = [10, 24, 36, 7, 98, 11, 14, 20, 98, 14, 10];
let max = 0;
let rep = 0;

for (e of arr) {
  if (max < e) {
    max = e;
  }
}
for (e of arr) {
  if (max === e) {
    rep++;
  }
}

console.log(
  `Número mayor = ${max}, cantidad de veces que se repite: ${rep}`
);
