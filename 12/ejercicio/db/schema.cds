
using {cuid} from '@sap/cds/common';
namespace myShop;



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
  price: Association to Price
}

entity Price : cuid {
  product:Association to many Product on product.price = $self; 
  price: Decimal
}

entity shopOwner: cuid {
  key shop: Association to Shop;
  key owner: Association to Owner;
}

entity shopProduct: cuid{
  key shop: Association to Shop;
  key product: Association to Product; 
}



