using { cuid, Currency } from '@sap/cds/common';


namespace brand;


aspect details{
  currency: Currency;
    price: Decimal(5,2);
    madeIn: String;
}

entity Countries: cuid{
    cities: Composition of many Cities on cities.countries=$self;
    name:String;
}

entity Cities :cuid{
    countries: Association to  Countries;
    shops: Composition of many Shops on shops.cities=$self;
    name:String 
}

entity Shops: cuid{
    cities: Association to Cities;
    categories: Association to many Categories on categories.shops=$self;
    name:String
}

entity Categories: cuid{
    shops: Association to Shops;
    articles: Composition of many Articles on articles.categories;
    name:String;
}

entity Articles :cuid, details {
    categories: Association to  Categories;
    name:String;
  
}



