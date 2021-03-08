/*============================================
ANCHOR Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20],
 mostrar por pantalla el valor máximo.
=============================================*/

let arr= [10,24,36,7,98,11,14,20];
let max=0;

for(e of arr){
    if( max < e){
        max=e;
    }
}

console.log(max);