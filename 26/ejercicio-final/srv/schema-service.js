const cds = require("@sap/cds");
const { Products, Orders } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("modifyQuantity", async (req) => {
    const { product_ID, quantity, details_region } = req.data.data;
    const selPro = await cds.run(
      SELECT.from(Products).where({ ID: product_ID })
    );
    let { stock, stockOrder } = selPro[0];

    if (!product_ID || !quantity || !details_region)
      return "Los campos son obligatorios";

    if (stock < 0) return "Operacion cancelada, no hay stock";

    if (stock < quantity)
      return "Operacion cancelada, stock insuficiente";

    await cds.run(
      INSERT.into(Orders).entries({
        product_ID,
        quantity,
        details_region,
        details_orderDate: Date.now(),
      })
    );

    await cds.run(
      UPDATE(Products)
        .set({
          stock: stock - quantity,
          stockOrder: stockOrder + quantity,
        })
        .where({ ID: product_ID })
    );
  });
});
