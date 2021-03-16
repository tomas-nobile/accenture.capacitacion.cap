using {brand as my} from '../db/schema';

service api{

    entity countries as select from my.Countries{*,
    Countries.name as Pais,
    Countries.cities.name as Ciudades,
    Countries.cities.shops.name as Locales,
    Countries.cities.shops.categories.articles.name as NombreProducto,
    Countries.cities.shops.categories.articles.price as Precio,
    Countries.cities.shops.categories.articles.madeIn as Origen,
    Countries.cities.shops.categories.articles.currency as Moneda
    };
    entity cities as select from my.Cities{*,};
    entity shops as select from my.Shops{*,};
    entity categories as select from my.Categories{*,};
    entity articles as select from my.Articles{*,};
}
