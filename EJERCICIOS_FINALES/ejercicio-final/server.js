const cds = require("@sap/cds");
const axios = require("axios").default;
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

cds.once("served", async () => {
  const { Products, Orders, OrderDetails } = cds.entities;

  await axios
    .get(
      "https://services.odata.org/Experimental/Northwind/Northwind.svc/Products",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
        rejectUnauthorized: false,
      }
    )
    .then(async (res) => {
      let resultado = res.data.value;
      let load = [];

      for (const e of resultado) {
        load.push({
          ID: e.ProductID,
          name: e.ProductName,
          quantityPerUnit: e.QuantityPerUnit,
          unitPrice: e.UnitPrice,
          unitsInStock: e.UnitsInStock,
          unitsOnOrder: e.UnitsOnOrder,
          unitsFinalStock: e.UnitsInStock- e.UnitsOnOrder,
          reorderLevel: e.ReorderLevel,
          discontinued: e.Discontinued,
        });
      }
      try {
        await cds.run(INSERT.into(Products).entries(load));
        console.log("OK: Productos cargados");
      } catch (err) {
        console.log(err);
        console.log("Productos no cargados");
      }
    })
    .catch((err) => {
      console.log(err);
      console.log("Error cargando productos");
    });

  await axios.get(
    "https://services.odata.org/Experimental/Northwind/Northwind.svc/Orders?$orderby=OrderID",
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      rejectUnauthorized: false,
    }
  ).then(async (res)=>{
let resultado= res.data.value;
let load=[];
let loadRegion;
let loadRegFecha;

for (const e of resultado) {
  if(e.ShipRegion === null){
    loadRegion='00'
  }
  loadRegFecha=e.OrderDate+'/'+loadRegion;

  load.push({
    ID:e.OrderID,
    IDdatos:loadRegFecha,
    shipName:e.ShipName,
    region:loadRegion,
    orderDate:e.OrderDate,
    requiredDate:e.RequiredDate,
    shippedDate:e.ShippedDate,
    creationDate:e.OrderDate,
    shipAddress:e.ShipAddress,
    shipCity:e.ShipCity,
    shipPostalCode:e.ShipPostalCode,
    shipCountry:e.ShipCountry
  })

}
try {
  await cds.run(INSERT.into(Orders).entries(load))
console.log('OK: Orders cargadas');
} catch (error) {
  console.log(error);
  console.log('Error: Orders no cargadas');
}

}).catch(err=>{
  console.log(err);
})
await axios.get(
  "https://services.odata.org/Experimental/Northwind/Northwind.svc/Order_Details",
  {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    httpsAgent: agent,
    rejectUnauthorized: false,
  }
).then(async (res)=>{
  let resultado= res.data.value;
  let loadOrderDetails=[];
  for (const e of resultado) {
    loadOrderDetails.push({
      order_ID:e.OrderID,
      product_ID:e.ProductID,
      unitPrice:e.UnitPrice,
      quantity:e.Quantity,
      discount:e.Discount
    })
  }
  try {
    await cds.run(INSERT.into(OrderDetails).entries(loadOrderDetails))
    console.log('OK: OrderDetails cargados');
  } catch (error) {
    console.log(error);
    console.log('Error: OrderDetails no cargados');
  }

}).catch(err=>{
  console.log(err);
  console.log('Error cargando OrderRetails');
})


});

module.exports = cds.server;
