/*============================================
2
=============================================*/

var valores = [true, 5, false, "hola", "adios", 2];
let numbers=[]
let strings=[]

for(i=0;i < valores.length;i++){
    if(typeof (valores[i]) ==="number"){
        numbers.push(valores[i])
    }
    else if(typeof (valores[i]) ==="string"){
        strings.push(valores[i])
    }
    
}

function operaciones(a,b){
    
    return `multiplicación: ${a*b} | 
    división ${a/b} | 
    suma: ${a+b} | 
    resta:  ${a-b}`

}

function longitud(a,b){
    
    if(a.length > b.length){
        return `${a} es mayor`
    }else{
        return `${b} es mayor`
    }
    
    
}

console.log(operaciones(numbers[0],numbers[1]));
console.log(longitud(strings[0],strings[1]));

