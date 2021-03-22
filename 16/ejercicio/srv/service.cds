using {red as my} from '../db/schema';

service api {

    entity usuarios as projection on my.Usuarios;
    entity mensajes as projection on my.Mensajes;
    entity perfiles as projection on my.Perfiles;
    entity publicaciones as projection on my.Publicaciones;
    entity comentarios as projection on my.Comentarios;

    entity usuarioPublicaciones as select from my.Usuarios{*,
        Usuarios.publicaciones.titulo as tituloPublicacion,
        Usuarios.username as usuario,
    };
    
    entity mas200amigos as select from my.Usuarios{*,
    Usuarios.username as usuario,
    Usuarios.amigos as amigos
    }where Usuarios.amigos >200;

    entity publicacionesmas100 as select from my.Usuarios{*,
    Usuarios.username as usuario,
    Usuarios.publicaciones.cantidadCompartido as vecesCompartido
    }where Usuarios.publicaciones.cantidadCompartido > 100;
}