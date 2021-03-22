const cds = require("@sap/cds");
const { shopProduct } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("modifyQuantity", async (req) => {
    const { shop_ID, product_ID, operacion } = req.data.data;
    const { venta, compra } = operacion[0];
    const selQua = await cds.run(
      SELECT("quantity")
        .from(shopProduct)
        .where({ shop_ID })
        .where({ product_ID })
    );
    const { quantity } = selQua[0];

    if (shop_ID && product_ID) {
      if ((venta && compra) || (!venta && !compra)) {
        return "Los campos venta y compra son requeridos, y solo uno de ellos puede ser llenado.";
      } else if (venta) {
        if (quantity - venta < 0) return "Stock insuficiente";

        await cds.run(
          UPDATE(shopProduct)
            .set({ quantity: { "-=": venta } })
            .where({ shop_ID })
            .where({ product_ID })
        );

        return "OK";
      } else if (compra) {
        if (quantity + compra > 1000) return "Stock maximo de 1000u";

        await cds.run(
          UPDATE(shopProduct)
            .set({ quantity: { "+=": compra } })
            .where({ shop_ID })
            .where({ product_ID })
        );

        return "OK";
      }
    } else return "Los IDs son obligatorios";
  });
});
