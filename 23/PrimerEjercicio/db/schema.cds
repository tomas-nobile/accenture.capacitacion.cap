using { cuid } from '@sap/cds/common';
namespace myLibreria;

entity Books : cuid
{
  name      : String(100);
  genre     : String(100);
  author    : Association to Authors;
  //author    : Association to many Books_Authors on author.book =$self;
}

entity Authors : cuid
{
  name      : String(100);
  country   : String(100);
  book      : Association to Books;
  //book    : Association to many Books_Authors on book.author =$self;
}

/*
entity Books_Authors
{
  key book  : Association to Books;
  key author: Association to Authors;
}
*/