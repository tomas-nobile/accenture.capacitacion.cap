let tirarDados = new Promise((resolve, reject) => {
  
  let body= document.querySelector("body")
  body.innerHTML= "<h1>Tirando dados </h1>"

  setTimeout(() => {
    let valor = Math.floor(Math.random() * 6) + 1;
    let mensaje =
      valor < 4 ? "Mensaje: 3 o menor" : "Mensaje: Mayor a 3";

    body.innerHTML = `<h1> El valor del dado es: ${valor}
        ${mensaje}  </h1>`;

    resolve();
  }, 4000);
});

tirarDados.then();
