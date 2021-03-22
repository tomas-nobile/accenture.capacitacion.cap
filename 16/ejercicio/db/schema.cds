namespace red;

using { cuid, Country, managed } from '@sap/cds/common';

aspect usuarioHumano{
    @mandatory nombre:String;
    @mandatory apellido:String;
    paisOrigen:String(3);
    genero:Integer enum {
        Femenino=1;
        Masculino=2;
        Otro=3
    };
    telefono:String;
    fechaNacimiento: DateTime;
    email: array of {
        usuario:String;
        dominio:String;
        full: String;
    }
}

entity Usuarios: cuid, usuarioHumano {
    @mandatory username: String;
    @mandatory password:String;
    amigos: Integer;
    estatus: Boolean;
    mensajes: Composition of many Mensajes on mensajes.usuarios=$self;
    publicaciones: Association to many Publicaciones on publicaciones.usuarios=$self;
    perfil: Association to Perfiles; 
    comentario:Association to Comentarios;
}

entity Mensajes:cuid {
    @mandatory remitente: String;
    contenido:String;
    leido:Boolean;
    multimedia: array of {
        tipo:String;
        size:Decimal;
    };
    usuarios: Association to Usuarios;
}

entity Perfiles : cuid {
    titulo:String;
    visualizaciones:Integer;
    actividad: Integer enum{
        Bronce=1;
        Plata=2;
        Oro=3;
        Diamante=4;
        Carbon=0
    };
    usuario: Association to Usuarios;
    publicaciones: Association to many Publicaciones on publicaciones.perfil=$self;
}

entity Publicaciones: cuid, managed {
    titulo: String default 'titulo';
    cantidadCompartido: Integer;
    tipo: Integer enum{
        texto= 1;
        foto= 2;
        video=3;
        url= 4;
    };
    vistaPrevia: Boolean;
    likes: Integer;
    usuarios: Association to Usuarios;
    comentarios: Association to Comentarios;
    perfil: Association to Perfiles;
}

entity Comentarios: cuid, managed{
    contenido: String(300); 
    usuario: Association to Usuarios;
    publicacion: Association to Publicaciones;
}

