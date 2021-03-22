const cds = require("@sap/cds");
const { Price } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on("editPrice", async (req) => {
    const { ID, value } = req.data.price;

    console.log(value);
    console.log(ID);

    try {
      await cds.run(
        UPDATE(Price)
          .set({ value})
          .where({ ID })
      );

      return "OK";
    } catch (error) {
      console.log(error);
    }
  });
});
