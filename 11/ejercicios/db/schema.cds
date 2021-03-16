
using {cuid} from '@sap/cds/common';
namespace misAutos;

entity Brand: cuid{
  name: String(30);
  country:String(30);
  comment: String(100);
  model: Composition of many{//array of 
    key name:String(30);
    type:String(30);
  }
}

