/*============================================
ANCHOR Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares 
y un valor que coincida con el índice en las posiciones impares.
=============================================*/


const len = 6;
const arr = [];

for (let i = 0; i < len; i++) {
  
    if((i%2)==0){
        arr.push(0)
    }
    else{
        arr.push(i);}
}

console.log(arr);
