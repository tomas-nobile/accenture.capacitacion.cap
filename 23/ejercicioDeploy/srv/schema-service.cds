using {libreria as my} from '../db/schema';

service api {

    entity libros as projection on my.Libros{*,};
    entity autores as projection on my.Autores{*,};

}