using { cuid,managed } from '@sap/cds/common';
namespace tienda;


entity Products: cuid{
    name:String;
    priceU:Integer;
    stock:Integer;
    stockOrder:Integer;
    orders: Association to many Orders on orders.product= $self;
}

entity Orders: cuid{
    quantity:Integer;
    employee:Association to Employees;
    product: Association to Products;
    details: Composition of OrderDetails
}

entity OrderDetails: cuid{
    IDdatos:String;
    dateOrder:DateTime;
    dateShip:DateTime;
    country:String; 
    ubication:String;
}

entity Employees: cuid{
    name:String;
    dni:Integer;
    orders: Association to many Orders on orders.employee=$self;
}
