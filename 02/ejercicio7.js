/*============================================
Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 =
[“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:

•¿Cuál de los dos personajes es más viejo?
•¿Cuál de los dos personajes está casado?
•Si Fido recibirá un aumento equivalente 
al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?
=============================================*/

let dato1=["Fido","Gomez",26,15000.78,true]
let dato2=["Gervasio","Fernandez",32,28550,false]

let esMayor=(a,b)=>{
    return (a[2]>b[2])?a[0]: b[0]
}

let estaCasado=(a)=>{
    return (a[4]?`${a[0]} esta casado`:`${a[0]} no esta casado`)
}

let ans3= dato1[3]+(dato2[3]*12.5)/100

console.log(`${esMayor(dato1,dato2)} es mayor`);
console.log(`${estaCasado(dato1)}`);
console.log(`${estaCasado(dato2)}`);
console.log(`El monto a cobrar es: ${ans3}`);




