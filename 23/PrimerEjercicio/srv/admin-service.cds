using { myLibreria as my } from '../db/schema';

service ApiService @(_requires:'authenticated-user')
{
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
}