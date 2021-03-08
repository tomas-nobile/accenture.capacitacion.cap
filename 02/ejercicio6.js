/*============================================
ANCHOR Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:

•Ambos arreglos son iguales
•Cuál de los dos es más largo
•Cuantas letras tienen en común
=============================================*/

let x=["a","l","f","a"];
let y= ["a","l","f","a","j","o","r"];

let ans1, ans2, ans3=0;


ans1= (JSON.stringify(x) === JSON.stringify(y))?"Si":"No" 

ans2= (x.length > y.length)? "x" : "y"

for(i in x){
    for(e in y){
        if(i===e){
            ans3++
        }
    }
}

console.log(`¿Son iguales? ${ans1}`);
console.log(`¿Cual es mas largo? ${ans2}`);
console.log(`¿Cuantas letras tienen en comun? ${ans3}`);