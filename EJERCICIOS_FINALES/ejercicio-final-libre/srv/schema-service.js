const cds = require("@sap/cds");
const { Products, Orders, OrderDetails, Employees } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("createOrder", async (req) => {
    const { product_ID, country, ubication, quantity } = req.data;
    const dateOrder = Date.now();
    const selPro = await cds.run(
      SELECT.from(Products).where({ ID: product_ID })
    );

    let { stock, stockOrder } = selPro[0];

    let stockFinal = stock - stockOrder;

    if (stockFinal < 0) return "No hay stock";

    if (stockFinal < quantity) return "No hay stock suficiente";

    // El envio se realiza luego de 3 dias de la fecha de compra, si es sabado o domingo se pasa para el lunes
    function addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      if (result.getDay() == 6) {
        result.setDate(result.getDate() + 2);
      } else if (result.getDay() == 0) {
        result.setDate(result.getDate() + 1);
      }

      return result;
    }

    console.log(addDays(Date.now(), 3));

    const insDet = await cds.run(
      INSERT.into(OrderDetails).entries({
        IDdatos: `${dateOrder}/${country}`.trim(),
        country,
        dateOrder,
        dateShip: (addDays(Date.now(), 3)).toString(),
        ubication,
      })
    );

    //Obtengo un empleado random para colocar su id en la orden
    const allEmpl = await cds.run(SELECT.from(Employees));
    const random = Math.floor(Math.random() * allEmpl.length) + 0;

    console.log(random);

    await cds.run(
      INSERT.into(Orders).entries({
        product_ID,
        //toma id de la fila recien creada(es la ult prop del obj)
        details_ID:
          insDet.results[0].values[
            insDet.results[0].values.length - 1
          ],
        quantity,
        employee_ID: allEmpl[random].ID,
      })
    );

    await cds.run(
      UPDATE(Products)
        .set({
          stock: stock,
          stockOrder: stockOrder + quantity,
        })
        .where({ ID: product_ID })
    );
  });
});
