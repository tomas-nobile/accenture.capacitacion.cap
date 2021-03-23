
using {cuid} from '@sap/cds/common';
namespace myshop;



entity Shop: cuid{
  name:String;
  owner: Association to many shopOwner on owner.shop = $self; 
  producto:Association to many shopProducto on producto.shop = $self; 
}

entity Owner: cuid{
  name:String;
  shop:Association to many shopOwner on shop.owner = $self; 
}

entity Producto: cuid{
  shop:Association to many shopProducto on shop.producto = $self;
  name: String;
  price: Association to Price;
  brand:Association to Brand;
  subtypes: Association to Subtypes;
}

entity Brand: cuid{
  name:String;
  products: Association to many Producto on products.brand=$self;
}

entity Types :cuid{
  name:String;
  subtypes: Association to Subtypes on subtypes.types=$self;
}

entity Subtypes : cuid{
  name:String;
  productos: Association to many Producto on productos.subtypes=$self;
  types: Association to Types;
}

entity Price : cuid {
  producto:Association to many Producto on producto.price = $self; 
  value: Decimal
}

entity shopOwner: cuid {
  key shop: Association to Shop;
  key owner: Association to Owner;
}

entity shopProducto: cuid{
  key shop: Association to Shop;
  key producto: Association to Producto;
  quantity:Integer;
  operacion: array of {
    compra:Integer;
    venta:Integer
  };
  minimo:Integer;
  maximo:Integer;
}



