namespace library;
using {cuid,managed} from '@sap/cds/common';

entity Books: cuid  {
  name  : String(30);
  year: Integer;
  createdAt:DateTime;
  author  : Association to Authors

}

entity Authors :cuid {
  name:  String(30);
  country:String(30);
  book: Association to Books
}
