const operacion = () => {
  let param = parseInt(prompt(
    "Indique la cantidad de tortas que va a comprar"
  ));
  let precio=150;
  let cobro = param * precio;
  let descuento=0;
  let gift=0;

  if (param > 10) {
    gift = Math.floor(param / 15);
  }

  if (param > 100 && param <= 500) {
    descuento = cobro * 0.1;
  }

  if (param > 500) {
    descuento = cobro * 0.15;
  }

  let tortas = {
    cantidad: param,
    subTotal: cobro,
    descuento: descuento,
    tortasRegaladas:gift,
    precioTotal: cobro - descuento,
    tortasTotal:param+gift
    
  };

  return tortas
};

console.log(operacion()); 
