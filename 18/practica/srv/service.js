const cds = require("@sap/cds");
const { Books } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("addBook", async (req) => {
    try {
      let { name, year } = req.data.book;

      let objeto = {
        createdAt: Date.now(),
        name,
        year,
      };

      console.log(objeto);
      try {
        await cds.run(INSERT.into(Books).entries(objeto));
        return 'OK'
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }); 

});



