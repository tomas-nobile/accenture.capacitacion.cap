const cds = require("@sap/cds");
const { Inventario } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("modInven", async (req) => {
    try {
      const { books, amount } = req.data;
      const aBooks = await cds.run(
        SELECT.from(Inventario).where({ books_ID: books})
      );
      if (aBooks.length > 0) {
        await cds.run(
          UPDATE(Inventario)
            .with({ cantidad: { "+=": amount } })
            .where({ books_ID: books})
        );
        return 'OK'
      }
      else{
        return('Nada para actualizar')
      }
    } catch (error) {
        console.log(error);
        console.log('Error a la hora de actualizar');
    }
  });


srv.on('insertOrder', async req =>{

    try {
        const {books} = req.data;

        if(await cds.run(INSERT.into(Inventario).entries(books))){
            return "OK"
        }
    } catch (error) {
        return "Hubo un error a la hora de la inserccion"
    }

})})