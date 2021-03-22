using {myshop as my} from '../db/schema';

service api {

  entity shop        as projection on my.Shop;
  entity owner       as projection on my.Owner;
  entity product     as projection on my.Product;
  entity brand       as projection on my.Brand;
  entity types       as projection on my.Types;
  entity subtypes    as projection on my.Subtypes;
  entity price       as projection on my.Price;
  entity shopowner   as projection on my.shopOwner;
  entity shopproduct as projection on my.shopProduct;
  entity show1 as select from my.shopOwner{*,
  shop.owner.owner.name as owner,
  shop.name as shop,
  shop.product.product.name as nameProduct,
  shop.product.product.price.value as price,
  };
  
  /* Rangos */

  entity menor300 as select from my.shopProduct{*,
  product.name as name,
  product.price.value as price} 
  where product.price.value < 300;

  entity entre300y700 as select from my.shopProduct{*,
  product.name as name,
  product.price.value as price} 
  where product.price.value > 300 and product.price.value < 700;

  entity mayor700 as select from my.shopProduct{*,
  product.name as name,
  product.price.value as price} 
  where product.price.value > 700;

  /* Filtros Marcas */

  entity marcaAguila as select from my.shopProduct{*,
  product.name as name,
  product.brand.name as brand} 
  where product.brand.name= 'Aguila';

  entity marcaMccain as select from my.shopProduct{*,
  product.name as name,
  product.brand.name as brand} 
  where product.brand.name= 'Mccain';

entity marcaMilka as select from my.shopProduct{*,
  product.name as name,
  product.brand.name as brand} 
  where product.brand.name= 'Milka';

entity marcaEcuador as select from my.shopProduct{*,
  product.name as name,
  product.brand.name as brand} 
  where product.brand.name= 'Ecuador';

  /* Filtros Tipo */

entity tipoCongelado as select from my.shopProduct{*,
  product.name as name,
  product.subtypes.types.name as tipo} 
  where product.subtypes.types.name= 'Congelados';


entity tipoDulces as select from my.shopProduct{*,
  product.name as name,
  product.subtypes.types.name as tipo} 
  where product.subtypes.name= 'Dulces';

  entity tipoVerduleria as select from my.shopProduct{*,
  product.name as name,
  product.subtypes.types.name as tipo} 
  where product.subtypes.name= 'Verduleria';

  /* Filtro subtipo */
entity subtipoComRapida as select from my.shopProduct{*,
  product.name as name,
  product.subtypes.name as subtipo} 
  where product.subtypes.name= 'Comida rapida';




}

