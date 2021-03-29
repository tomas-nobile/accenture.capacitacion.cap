using {tienda as my} from '../db/schema';

service api {
    entity products  as projection on my.Products{*,

    };
    entity orders as projection on my.Orders;
    entity orderDetails as projection on my.OrderDetails{*,}


    action modifyQuantity(data:orders) returns String;
  }