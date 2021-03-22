const cds = require("@sap/cds");
const { shopOwner } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.after("CREATE", "owner", async (data, req) => {
    const { url } = req._.req.query;
    const { ID } = data;

    

    try {
      
      if(url){

        const arrTiendas = url.split(",");

        for (const tienda of arrTiendas) {
          await cds.run(
            INSERT.into(shopOwner).entries({
              shop_ID: tienda,
              owner_ID: ID,
            })
          );
        }
        return "OK";
      }else{
        console.log('Falta el shop');
      }
    } catch (error) {
      console.log(error);
    }
  });
});
