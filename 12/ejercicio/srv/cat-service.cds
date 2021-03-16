using {myShop as my} from '../db/schema';

service api {


  entity shop    as
    select from my.Shop {
      *,
    };

  entity owner   as
    select from my.Owner {
      *,
    };

  entity product as
    select from my.Product {
      *,
    };

  entity price   as
    select from my.Price {
      *,
    };

  entity shopOwner   as
    select from my.shopOwner {
      *,
      
    };

entity shopProduct   as
    select from my.shopProduct {
      *,
      
    };

entity show   as
    select from my.shopOwner  {
      *,
    shop.name,
    shop.owner.owner.name as nameOwner,
    shop.product.product.name as productName,


    };
}


