using {tienda as my} from '../db/schema';

service privado @(requires:'scope1'){
    entity products  as projection on my.Products;
    entity orders as projection on my.Orders;
    entity employees as projection on my.Employees;
    entity orderDetails as projection on my.OrderDetails{*,}
    entity vista as projection on my.Orders{*,
    product.name as ProductName,
    product.priceU as PriceU,
    product.stock as Stock,
    product.stockOrder as StockOnOrder,
    employee.name as EmployeeInCharge,
    details.ubication as Ubication,
    details.dateOrder as DateOrder,
    details.dateShip as DateShip,
    details.country as Country
    };

    action createOrder(product_ID:UUID, dateOrder:DateTime,country:String,ubication:String, quantity:Integer) returns String;
  }

  service publico{
    entity products  as projection on my.Products;
    entity orders as projection on my.Orders;
    entity employees as projection on my.Employees;
    entity orderDetails as projection on my.OrderDetails{*,}
    entity vista as projection on my.Orders{*,
    product.name as ProductName,
    product.priceU as PriceU,
    product.stock as Stock,
    product.stockOrder as StockOnOrder,
    employee.name as EmployeeInCharge,
    details.ubication as Ubication,
    details.dateOrder as DateOrder,
    details.dateShip as DateShip,
    details.country as Country
    };

    action createOrder(product_ID:UUID, dateOrder:DateTime,country:String,ubication:String, quantity:Integer) returns String;
  }