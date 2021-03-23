namespace libreria;

using { cuid } from '@sap/cds/common';


entity Autores : cuid {
    nombre:String;
    libros: Association to many Libros on libros.autor=$self;
}


entity Libros : cuid {
    nombre:String;
    autor: Association to Autores
}

