/*============================================
ANCHOR Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su
posición.
=============================================*/

let arr= [10,24,36,7,98,11,14,20];
let max=0;
let pos=0;

for(e of arr){
    if( max < e){
        max=e;
        pos= arr.indexOf(max)
    }
}

console.log(`Número mayor = ${max}, posición: ${pos}`);