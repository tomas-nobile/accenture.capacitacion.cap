using {tienda as my} from '../db/schema';

service privado @(requires:'scope1'){
    entity products  as projection on my.Products{*,};
    entity orders as projection on my.Orders;
    entity orderDetails as projection on my.OrderDetails{*,}

    entity vista as projection on my.OrderDetails{*,
    product.name as productName,
    product.unitPrice as unitPrice,
    product.unitsInStock as stock,
    product.unitsOnOrder as onOrder,
    product.unitsFinalStock as finalStock,
    quantity as quantityOrder,
    order.region as region,
    order.shipAddress as shipAddress,
    order.shippedDate as shippedDate
    };

   action modifyQuantity(compra:Integer,venta:Integer, order_ID:Integer, product_ID:Integer) returns String;
  }


  service publico {
    entity products  as projection on my.Products{*,};
    entity orders as projection on my.Orders;
    entity orderDetails as projection on my.OrderDetails{*,}

    entity vista as projection on my.OrderDetails{*,
    product.name as productName,
    product.unitPrice as unitPrice,
    product.unitsInStock as stock,
    product.unitsOnOrder as onOrder,
    product.unitsFinalStock as finalStock,
    quantity as quantityOrder,
    order.region as region,
    order.shipAddress as shipAddress,
    order.shippedDate as shippedDate
    };

   action modifyQuantity(compra:Integer,venta:Integer, order_ID:Integer, product_ID:Integer) returns String;
  }