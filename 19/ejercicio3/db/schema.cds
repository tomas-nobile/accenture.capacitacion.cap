
using {cuid} from '@sap/cds/common';
namespace myshop;



entity Shop: cuid{
  name:String;
  owner: Association to many shopOwner on owner.shop = $self; 
  product:Association to many shopProduct on product.shop = $self; 
}

entity Owner: cuid{
  name:String;
  shop:Association to many shopOwner on shop.owner = $self; 
}

entity Product: cuid{
  shop:Association to many shopProduct on shop.product = $self;
  name: String;
  price: Association to Price;
  brand:Association to Brand;
  subtypes: Association to Subtypes;
}

entity Brand: cuid{
  name:String;
  products: Association to many Product on products.brand=$self;
}

entity Types :cuid{
  name:String;
  subtypes: Association to Subtypes on subtypes.types=$self;
}

entity Subtypes : cuid{
  name:String;
  products: Association to many Product on products.subtypes=$self;
  types: Association to Types;
}

entity Price : cuid {
  product:Association to many Product on product.price = $self; 
  value: Decimal
}

entity shopOwner: cuid {
  key shop: Association to Shop;
  key owner: Association to Owner;
}

entity shopProduct: cuid{
  key shop: Association to Shop;
  key product: Association to Product;
  quantity:Integer;
  operacion: array of {
    compra:Integer;
    venta:Integer
  }
}



