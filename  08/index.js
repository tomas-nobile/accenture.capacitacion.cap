/*============================================
ANCHOR BD
=============================================*/

let alumnos = [
  {
    name: "tomas",
    dni: "42077878",
    bday: "1999-12-18",
    phone: "1169008951",
    email: "nobiletomas@icloud.com",
    id: "a1420778782021",
    course: "1",
  },
  {
    name: "valentin",
    dni: "42077879",
    bday: "1998-12-18",
    phone: "1169004587",
    email: "valentin@icloud.com",
    id: "a1420778792021",
    course: "2",
  },
];

let notas = [
  {
    id: "a1420778782021",
    quimica: 5,
    matematica: 5,
    sociales: 5,
    fisica: 5,
    historia: 5,
    biologia: 5,
    informatica: 5,
    idioma: 5,
  },
  {
    id: "a1420778792021",
    quimica: 2,
    matematica: 2,
    sociales: 2,
    fisica: 2,
    historia: 2,
    biologia: 2,
    informatica: 2,
    idioma: 2,
  },
];

/*============================================
ANCHOR Funciones
=============================================*/

/*============================================
Validaciones simples
=============================================*/

function validarNombre() {
  let name = document.querySelector("#name").value.normalize();

  if (name.lenght < 0 || name.length > 30) {
    let alerta= alert("Nombre Invalido")
  }
}

function validarDni() {
  let dni = document.querySelector("#dni").value;
  if (dni.length != 8) {
    let alerta= alert("DNI invalido")
  }
}

function validarEdad() {
  let bday = new Date(document.querySelector("#bday").value),
    hoy = new Date(),
    y = hoy.getFullYear() - bday.getFullYear(),
    m = hoy.getMonth() - bday.getMonth();

  if (m < 0 || (m == 0 && hoy.getDate() < bday.getDate())) {
    y--;
  }
  if (y < 18) {
    let alerta= alert("Debe ser mayor de edad")
  }
}

function validarTelefono() {
  let phone = document.querySelector("#phone").value;

  if (phone.length != 10) {
    let alerta= alert("Telefono invalido")
  } 
}

function validarEmail() {
  let email = document.querySelector("#email").value,
    regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (email > 50) {
    let alerta= alert("Email invalido")
  }
  if (!regex.test(email)) {
    let alerta= alert("Email invalido")
  }
}

function validarLegajo() {
  let id = document.querySelector("#id").value,
    dni = document.querySelector("#dni").value;

  if (
    id.substr(2, 8) != dni ||
    id.substr(0, 1) != "a" ||
    id.substr(-4) != "2021"
  ) {
    let alerta= alert("Legajo invalido")
  }
}

/*============================================
Validar si existe el usuario
=============================================*/

function validarExist() {
  let objInput = {
    name: document.querySelector("#name").value.normalize(),
    dni: document.querySelector("#dni").value,
    bday: document.querySelector("#bday").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
    id: document.querySelector("#id").value,
    course: document.querySelector("#course").value,
  };

  let find = alumnos.find((obj) => obj.id == objInput.id);

  console.log(find);

  /* Coincidencia */
console.log(JSON.stringify(objInput));
console.log(JSON.stringify(find));
  if (JSON.stringify(objInput) == JSON.stringify(find)) {
    document.querySelector("#menu").hidden = false;
    document.querySelector("#inicio").hidden = true;
  } else {
    console.log("Usuario no encontrado: Verifique los datos");
  }

  /* Menu: Funcionamiento de botones */

  document.querySelector("#search-btn").onclick = () => {
    document.querySelector("#menu").hidden = true;
    document.querySelector("#search").hidden = false;
  };

  document.querySelector("#list-btn").onclick = () => {
    document.querySelector("#menu").hidden = true;
    document.querySelector("#list").hidden = false;
  };
  document.querySelector("#passed-btn").onclick = () => {
    document.querySelector("#menu").hidden = true;
    document.querySelector("#passed").hidden = false;
  };
  document.querySelector("#back-btn").onclick = () => {
    document.querySelector("#menu").hidden = false;
    document.querySelector("#search").hidden = true;
    document.querySelector("#passed").hidden = true;
    document.querySelector("#list").hidden = true;
  };
  document.querySelector("#exit-btn").onclick = () => {
    document.querySelector("#menu").hidden = true;
  };
}

/*============================================
Funciones de Menu
=============================================*/

/*============================================
Buscar un usuario
=============================================*/

function search() {
  let select = document.querySelector("#select-search").value;
  let input = document.querySelector("#input-search").value;
  let find = alumnos.find((obj) => obj[select] == input);

  let alerta = alert(JSON.stringify(find));
}

/*============================================
Listar todo
=============================================*/

function list() {
  for (alumno of alumnos) {
    let alerta = alert(JSON.stringify(alumno));
  }
}

/*============================================
Listar aprobados y desaprobados
=============================================*/

function passed() {
  for (nota of notas) {
    let {
      biologia,
      fisica,
      historia,
      idioma,
      informatica,
      matematica,
      quimica,
      sociales,
    } = nota;

    let passed =
      quimica +
      matematica * 2 +
      sociales * 0.5 +
      fisica +
      historia * 0.5 +
      biologia * 2 +
      informatica * 3 +
      idioma * 3;

    if (passed >= 65) {
      nota.passed = true;
    } else {
      nota.passed = false;
    }

    let student = alumnos.find((obj) => obj.id == nota.id);

    let alerta = alert(
      `Student  ${student.name} Quimica: ${
        quimica > 4 ? "Aprobado" : "Desaprobado"
      } Matematica: ${
        matematica > 4 ? "Aprobado" : "Desaprobado"
      } Sociales: ${
        sociales > 4 ? "Aprobado" : "Desaprobado"
      } Idioma: ${idioma > 4 ? "Aprobado" : "Desaprobado"} Fisica: ${
        fisica > 4 ? "Aprobado" : "Desaprobado"
      }  Historia: ${
        historia > 4 ? "Aprobado" : "Desaprobado"
      } Biologia :${
        biologia > 4 ? "Aprobado" : "Desaprobado"
      } Informatica ${
        informatica > 4 ? "Aprobado" : "Desaprobado"
      }  ¿Paso de año? ${nota.passed ? "Si" : "No"}`
    );
  }
}




