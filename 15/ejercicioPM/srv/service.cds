using {libreria as my} from '../db/schema';


service api {
    entity libros as projection on my.Libros{*,};
    entity editoriales as projection on my.Editoriales{*,};
    entity clientes as projection on my.Clientes{*,};
    entity usuarios as projection on my.Usuarios {*,};
    entity autores as projection on my.Autores{*,};
    entity clienteslibros as projection on my.ClientesLibros{*,
        clientes.nombre as nombre_cliente, 
        clientes.usuario.nombre as nombre_usuario,
        clientes.usuario.email as email,
        clientes.usuario.puntos as puntos_usuario,
        clientes.usuario.estado as estado,
        clientes.libros.libros.nombre as nombre_libro,
        clientes.libros.libros.criticas as criticas,
        clientes.libros.libros.puntaje as puntaje,
        clientes.libros.libros.fechaPublicacion as fechaPublicacion,
        clientes.libros.libros.editorial.nombre as nombre_editorial,
        clientes.libros.libros.autor.nombre as nombre_autor,
        clientes.libros.libros.autor.genero as genero_autor,
        clientes.libros.libros.autor.nacionalidad as nacionalidad_autor,
        clientes.libros.libros.autor.ventaDirecta as venta_directa_autor,
        clientes.libros.libros.autor.cantLibros as cantidad_libros_autor,

    }
}


