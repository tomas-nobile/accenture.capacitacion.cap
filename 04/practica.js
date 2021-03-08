let mensajes = [
  {
    nombre: "accenture",
    mensaje: "Mensaje informal",
  },
  {
    nombre: "globant",
    mensaje: "Mensaje semiformal",
  },
  {
    nombre: "meli",
    mensaje: "Mensaje formal",
  },
];

const saludos = () => {
  let param = prompt("Indique su nombre").toLowerCase();

  let find = mensajes.find((obj) => obj.nombre == param);
  if (find == undefined) {
    confirm("Are you sure?");
    return console.log(`Hola ${param}... mensaje generico`);
  } else {
    console.log(find.mensaje);
  }
};

saludos();
