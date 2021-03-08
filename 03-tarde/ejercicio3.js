function calcular() {
  let promParc =
    (parseInt(document.querySelector("input[name=tCP1").value) +
      parseInt(document.querySelector("input[name=tCP2").value) +
      parseInt(document.querySelector("input[name=tCP3").value)) /
    3;

     let porcProm=parseInt(document.querySelector("input[name=tPar").value),
        porcFin= parseInt(document.querySelector("input[name=tPEF").value),
        porcTp= parseInt(document.querySelector("input[name=tPTF").value),
        exFinal= parseInt(document.querySelector("input[name=tEF").value),
        tpFinal= parseInt(document.querySelector("input[name=tTF").value)

    
    let final= (exFinal*porcFin)/100;
    let tp=(tpFinal*porcTp)/100;
    let parc= (promParc*porcProm)/100
    
    document.querySelector("input[name=tPro").value= promParc;


    document.querySelector("input[name=tCF").value= final+tp+parc;


}
