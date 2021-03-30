using { cuid,managed } from '@sap/cds/common';
namespace tienda;


entity Products{
    key ID: Integer;
    name: String;
    quantityPerUnit:String;
    unitPrice: Decimal(10,4);
    unitsInStock: Integer;
    unitsOnOrder: Integer;
    unitsFinalStock:Integer;
    reorderLevel: Integer;
    discontinued: Boolean;

}

entity Orders{
    key ID:Integer;
    IDdatos:String;
    shipName:String;
    region:String;
    orderDate:DateTime;
    requiredDate:DateTime;
    shippedDate:DateTime;
    creationDate:DateTime;
    shipAddress:String;
    shipCity:String;
    shipPostalCode:String;
    shipCountry:String
    
}

entity OrderDetails{
    key order:Association to Orders;
    key product:Association to Products;
    unitPrice:Decimal(10,4);
    quantity:Integer;
    discount:Decimal(5,4)
}


