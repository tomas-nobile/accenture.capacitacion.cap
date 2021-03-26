using {tienda as my} from '../db/schema';

service api {
    entity products  as projection on my.Products{*,
    Products.orders.details.orderDate as date,
    Products.orders.details.region as region

    };
    entity orders as projection on my.Orders;
    entity orderDetails as projection on my.OrderDetails{*,}


    action modifyQuantity(data:orders, detail:orderDetails) returns String;
  }