var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P'
, 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q'
, 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calc(){
    
    let dni= prompt("Indique su DNI");
    if(dni > 0 && dni <99999999){
        
        let letra=prompt("Indique su letra")
        let resto= dni%23
    
        if(letras[resto]=== letra.toUpperCase()){
            return console.log("Todo correcto");
        }else{
            console.log("revise dni o letra");
        }
    }else{
        console.log("El dni debe ser mayor a 0 y menor a 99999999");
    }
    


}

calc();