namespace libreria;

using { cuid, Currency } from '@sap/cds/common';

aspect auth{
    @mandatory nombre: String ;
    @mandatory contrasena:String ;
}

entity Libros:cuid{
    @mandatory nombre:String ;
    fechaPublicacion: DateTime;
    @mandatory puntaje: Integer ;
    criticas: array of {
        autor:String;
        texto:String;
    };
    editorial: Association to Editoriales;
    autor: Association to Autores;
    clientes: Association to many ClientesLibros on clientes.libros=$self;
}

entity Clientes:cuid{
    @mandatory nombre: String ;
    @mandatory fechaNacimiento: DateTime ;
    libros: Association to  many ClientesLibros on libros.clientes =$self;
    DNI:Integer;
    usuario: Composition of Usuarios; 
}

entity Usuarios :cuid,auth{
    cliente: Association to Clientes;
    email: array of{
        correo:String
    };
    puntos: Integer;
    estado : Integer enum{
        activo=1;
        baja=2;
        pendiente=3
    };
}

entity Editoriales :cuid{
    nombre:String;
    nacionalidad:String;
    autores: Association to many Autores on autores.editorial=$self;
}


entity Autores: cuid{
    @mandatory nombre:String;
    genero:String default 'novela';
    fechaNacimiento:DateTime @mandatory;
    nacionalidad:String;
    cantLibros:Integer;
    ventaDirecta:Boolean;
    editorial: Association to Editoriales;
    libros: Association to many Libros on libros.autor=$self;
}


entity ClientesLibros: cuid {
    clientes: Association to Clientes;
    libros:Association to Libros
} 