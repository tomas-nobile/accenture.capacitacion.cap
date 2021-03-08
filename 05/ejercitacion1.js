let usuarios = [
  {
    id: 0,
    nombre: "carla",
    telefono: 1545628984,
    email: "carla@gmail.com",
  },
  {
    id: 1,
    nombre: "pedro",
    telefono: 1545251245,
    email: "pedro@gmail.com",
  },
  {
    id: 2,
    nombre: "lucas",
    telefono: 1523357849,
    email: "lucas@gmail.com",
  },
  {
    id: 3,
    nombre: "ana",
    telefono: 15789456,
    email: "ana@gmail.com",
  },
];

function proc() {
  /*============================================
Mostrar mensaje de alerta
=============================================*/
  function alerta(mensaje) {
    let alerta = alert(`${mensaje}`);
  }
  /*============================================
Mostrar Input
=============================================*/
  function input(mensaje) {
    return prompt(`${mensaje}`).toLowerCase().trim();
  }

  /*============================================
Confirma nueva accion
=============================================*/
  function confirmacion(mensaje) {
    return confirm(mensaje);
  }

  /*============================================
ANCHOR Flujo de proc()
=============================================*/

  /*============================================
Mostrar menu
=============================================*/
  function menu() {
    let menuInput = input(
      "MENU DE OPERACIONES (ESCRIBA EL NUMERO CORRESPONDIENTE PARA ACCEDER)  " +
        "1. Buscar usuario  " +
        "2. Listar todos los usuarios  " +
        "3. Salir del programa  "
    );
    if (menuInput > 0 && menuInput < 4) {
      if (menuInput == 1) return filtrar();
      if (menuInput == 2) return mostrarUsuarios();
      if (menuInput == 3) return salir();
    } else {
      return menu();
    }
  }

  menu();

  /*============================================
Filtrar Usuarios
=============================================*/
  function filtrar() {
    let filter = input(
      "Indique por qué dato va a buscar: id,nombre,telefono o email"
    );

    if (
      filter == "id" ||
      filter == "nombre" ||
      filter == "telefono" ||
      filter == "email"
    ) {
    function filtrar2(){ 
    let param1 = input(`Indique su ${filter}`);
      let find = usuarios.find((obj) => obj[filter] == param1);

      if (find == undefined) {
        alerta("No hay resultados");
        let confirm = confirmacion("¿Desea intentarlo nuevamente?");

        if (confirm) {
        filtrar2()
          

        } else {
          menu();
        }
      }
      alert(`${JSON.stringify(find)}`)
      menu()
    }
    filtrar2()
} else {
        filtrar()
      }
  }

/*============================================
Mostrar usuarios
=============================================*/
  function mostrarUsuarios(){

    alert(`${JSON.stringify(usuarios)}`)
    menu()
  }

/*============================================
Salir de la app
=============================================*/

function salir(){
    confirmacion("¿Desea salir de la aplicacion?")
    
    if(confirmacion){
        alert('Gracias por utilizar la aplicacion')
        function finish(){}
        finish()
    }else{
        menu()
    }

    
}
}

proc();
