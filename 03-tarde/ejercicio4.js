function calc() {
  let param = prompt(
    "Indique cuanto dinero quiere ingresar (sin el $)"
  );

  let interesAnual = (param * 35.5) / 100;
  let interesMensual = interesAnual / 12;
  let interesx3 = interesMensual * 3;

  let body = document.querySelector("body");
  body.innerHTML = `<h1> interes mensual: ${interesMensual}   
  interes total de 3 meses= ${interesx3} </h1>`;
}

calc()