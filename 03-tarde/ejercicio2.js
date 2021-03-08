let autos = [
  {
    modelo: "Ford Fiesta",
    codigo: 11450,
    precio: 1350344,
    descuento: 5,
  },
  {
    modelo: "Ford Focus",
    codigo: 11451,
    precio: 1750502,
    descuento: 10,
  },
];

let showCar = () => {
  let param = prompt("Indique el modelo o codigo");

  let find = autos.find((obj) => obj.modelo == param);
  if (find == undefined) {
    find = autos.find((obj) => obj.codigo == param);
  }
  return (auto = {
    modelo: find.modelo,
    codigo: find.codigo,
    precio: find.precio,
    descuento: find.descuento,
    valorTotal: find.precio - (find.precio * find.descuento) / 100,
  });
  
};

console.log(showCar());
