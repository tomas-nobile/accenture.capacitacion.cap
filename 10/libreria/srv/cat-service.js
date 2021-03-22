const cds = require("@sap/cds");


module.exports = cds.service.impl(async (srv) => {


  

  /*============================================
  UPDATE
  =============================================*/
  

  srv.before('UPDATE','Books', async () => {
    console.log('Antes de update');
    
  });

  srv.on('UPDATE', 'Books', async () =>{
    console.log('Updateando ');
    
    
    
  });

  srv.after('UPDATE', 'Books', async () =>{
    console.log('Despues de update ');
    

  });  

  /*============================================
  READ
  =============================================*/

  srv.before('READ','Books', async (req) => {
    console.log('Antes de Obtener');
    console.log(req.query);

  });
/*    srv.on('READ', 'Books', async () =>{
    console.log('Obteniendo');
 
  });  */

  srv.after('READ', 'Books', async () =>{
    console.log('Despues de obtener ');

  }); 


  /*============================================
  DELETE
  =============================================*/

  srv.before('DELETE','Books', async (req) => {
    console.log('Antes de Borrar');
    console.log(req.data);

  });
   srv.on('DELETE', 'Books', async (req) =>{
    console.log('Borrando');
    console.log(req.data);
  }); 

  srv.after('DELETE', 'Books', async (req) =>{
    console.log('Despues de borrar ');
    console.log(req.data);
  }); 




  /*   srv.on("modInven", async (req) => {
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

}) */


})