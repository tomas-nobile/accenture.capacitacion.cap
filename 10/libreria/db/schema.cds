namespace myLibreria;
using {cuid,managed} from '@sap/cds/common';

entity Books: cuid,managed {
  key ID: Integer;
  name  : String(30);
  author  : Association to Author

}

entity Author{
  key ID:Integer;
  name:  String(30);
  country:String(30);
  books: Association to Books
}

entity Inventario : cuid, managed {
    books:Association to Books;
    cantidad:Integer;
    price:Decimal(3, 2);
    comentario: String
}