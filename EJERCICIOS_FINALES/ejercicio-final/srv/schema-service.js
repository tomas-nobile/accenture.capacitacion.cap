const cds = require("@sap/cds");
const { Products, OrderDetails } = cds.entities;

module.exports = cds.service.impl(async (srv) => {

/*============================================
Agrega/elimina productos modificando una orden
=============================================*/


  srv.on("modifyQuantity", async (req) => {
    const { compra,venta, order_ID, product_ID } = req.data;

    const selOrdDet = await cds.run(
      SELECT.from(OrderDetails).where({ order_ID, product_ID })
    );
    const selPro = await cds.run(
      SELECT.from(Products).where({ ID: product_ID })
    );

    let { unitsFinalStock } = selPro[0];
    let { quantity } = selOrdDet[0];

    if (unitsFinalStock <= 0) return "No hay stock";
    
    if(!compra && !venta || compra && venta) return 'Rellene compra o venta';

    if(compra){
      await cds.run(
        UPDATE(Products)
        .set({ unitsInStock: { "+=": compra },
        unitsFinalStock: { "+=": compra }  })
        .where({ID:product_ID})
      );
    }

    if(venta){
      if (unitsFinalStock < quantity + venta) return "No hay stock suficiente";

      await cds.run(
        UPDATE(Products)
        .set({ unitsOnOrder: { "+=": venta },
        unitsFinalStock: { "-=": venta }  })
        .where({ID:product_ID})
      );

      await cds.run(
        UPDATE(OrderDetails)
        .set({ quantity: { "+=": venta }})
        .where({product_ID,order_ID})
      );

    }
      
  });
});
