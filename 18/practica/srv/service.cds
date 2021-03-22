using { library as my } from '../db/schema';
service api {

  entity books as SELECT from my.Books {*,};
  entity author as SELECT from my.Authors {*,};

/*   action addBook(book:books) returns String; */

}