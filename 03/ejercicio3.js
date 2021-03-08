/*============================================
3
=============================================*/

function showText(text){

    if(text===text.toUpperCase()){
        return "Es mayuscula"
    }
    if(text===text.toLowerCase()){
        return "Es miniscula"
    }
    else{
        return "Es mixto"
    }

}
console.log(showText("hola"));
