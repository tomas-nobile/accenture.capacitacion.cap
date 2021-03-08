function transaccion() {
  /*============================================
ANCHOR variables
=============================================*/

  let nombreTienda = "Zara",
    productos = [
      (producto1 = {
        nombre: "remeras",
        precio: 2000,
      }),
      (producto2 = {
        nombre: "pantalones",
        precio: 4000,
      }),
    ],
    codigo = "tomas";

  /*============================================
ANCHOR Funciones
=============================================*/

  /*============================================
Mostrar mensaje de alerta
=============================================*/
  function alerta(mensaje) {
    let alerta = alert(mensaje);
  }
  /*============================================
Mostrar Input
=============================================*/
  function input(mensaje) {
    return prompt(mensaje).toLowerCase().trim();
  }

  /*============================================
Confirma nueva accion
=============================================*/
  function confirmacion(mensaje) {
    return confirm(mensaje);
  }

  /*============================================
Validaciones
=============================================*/
  function validacionNombre() {
    let nombre = input("Ingrese su nombre");

    if (nombre.length > 30) {
      alerta("El nombre debe ser menor a 30 caracteres");
      validacionNombre();
    }
  }
  function validacionEdad() {
    let año = parseInt(
        prompt("Ingrese el eño en que nacio (con numeros)")
      ),
      mes = parseInt(
        prompt("Indique el mes en que nacio (con numeros)")
      ),
      dia = parseInt(
        prompt("Indique el dia en que nacio (con numeros)")
      ),
      hoy = new Date(),
      edad =
        hoy.getFullYear() -
        año +
        (hoy.getMonth() - mes) +
        (hoy.getDay() - mes);

    if (isNaN(año) || isNaN(mes) || isNaN(dia)) {
      alerta("Ingrese numeros");
      validacionEdad();
    }
    if (año < 1900 || año > hoy.getFullYear()) {
      alerta("Año no valido");
      validacionEdad();
    }
    if (mes < 1 || mes > 12) {
      alerta("Mes no valido");
      validacionEdad();
    }
    if (dia < 1 || dia > 31) {
      alerta("Dia no valido");
      validacionEdad();
    }
    if (edad <= 18) {
      alerta("Debes ser mayor de 18");
      console.log(edad);
      transaccion();
    }
  }

  function compra() {
    let offer1 = confirmacion(
      `¿Le gustaria comprar ${productos[0].nombre} a $${productos[0].precio}?`
    );
    if (offer1) {
      let cantidad1 = input("¿Cuantas unidades desea llevar?");
      var subtotal1 = cantidad1 * productos[0].precio;
      var mensajeSub1 = `El subtotal es de ${subtotal1}. `;
    } else {
      mensajeSub1 = "";
    }
    let offer2 = confirmacion(
      `¿Le gustaria comprar ${productos[1].nombre} a  $${productos[1].precio}?`
    );
    if (offer2) {
      let cantidad2 = input("¿Cuantas unidades desea llevar?");
      var subtotal2 = cantidad2 * productos[1].precio;
      var mensajeSub2 = `El subtotal es de ${subtotal2}. `;
    } else {
      mensajeSub2 = "";
    }

    if (offer1 && offer2) {
      var total = subtotal1 + subtotal2;
    } else if (offer1 && !offer2) {
      var total = subtotal1;
    } else if (!offer1 && offer2) {
      var total = subtotal2;
    } else {
      compra();
    }

    alerta(mensajeSub1 + mensajeSub2 + `El total es de $${total} `);

    let offer3 = confirmacion("¿Tiene un codigo de descuento?");

    if (offer3) {
      function codigoFunc() {
        let codigoUser = input("Ingrese el codigo de descuento");
        if (codigoUser != codigo) {
          alerta(
            `Lo sentimos, el codigo ${codigoUser} es incorrecto`
          );
          codigoFunc();
        }
      }
      codigoFunc();
      var descuento = total * 0.1;
      total -= descuento;
      alerta(
        mensajeSub1 +
          mensajeSub2 +
          `El descuento es de ${descuento} ` +
          `El total es de $${total} `
      );
    }

    let offer4 = confirmacion(
      "¿Desea abonar con tarjeta de credito?"
    );

    if (offer4) {
      function cuotasFunc() {
        let cantCuotas = input(
          "Indique la cantidad de cuotas. El maximo es de 12"
        );

        if (cantCuotas < 1 || cantCuotas > 12) {
          alerta("El minimo de cuotas es 1 y el maximo 12");
          cuotasFunc();
        }
        return cantCuotas;
      }
    }
    let cantCuotas = cuotasFunc();
    let cuotas = total / cantCuotas;

    alerta(
      mensajeSub1 +
        mensajeSub2 +
        ` El descuento es de ${descuento} ` +
        ` La cantidad de cuotas son ${cantCuotas}. ` +
        ` El valor de cada cuota es de $${cuotas}. ` +
        ` El total es de $${total}. `
    );
  }

  function despedida() {
    alerta("Gracias por visitar nuestra tienda. Saludos");
    let fin = () => {};
    fin();
  }

  /*============================================
ANCHOR Flujo de la aplicacion
=============================================*/
  alerta(`Bienvenido a ${nombreTienda}`);
  validacionNombre();
  validacionEdad();
  compra();
  despedida();
}

transaccion();
