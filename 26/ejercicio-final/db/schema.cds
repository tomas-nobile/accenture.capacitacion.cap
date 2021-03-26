using { cuid,managed } from '@sap/cds/common';
namespace tienda;


entity Products: cuid{
    name:String;
    stock:Integer;
    priceU:Integer;
    supplierID:Integer;
    categoryID:Integer;
    stockOrder:Integer;
    orders: Association to many Orders on orders.product= $self;
}

entity Orders: cuid{
    quantity:Integer;
    product: Association to Products;
    details: Composition of OrderDetails
}

entity OrderDetails{
    key orderDate: DateTime;
    key region: String;
}


