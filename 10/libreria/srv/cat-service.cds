using { myLibreria as my } from '../db/schema';
service api {

  entity Books as SELECT from my.Books {*,
  };
  entity Author as SELECT from my.Author {*,
  
  };
/*   entity Inventario as SELECT from my.Inventario {*,
    books.name,
    books.author.ID,
    books.author.name as name_author,
  }; */

  /* action modInven(books:Books:ID,amount:Integer) returns String; */
  /* action insertOrder(books:array of my.Inventario) returns String; */
}
