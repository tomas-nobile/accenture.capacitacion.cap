using {libreria as my} from '../db/schema';

@(path:'/Auth') service api  @(requires: 'authenticated-user'){

    entity libros as projection on my.Libros{*,};
    @readonly
    entity autores as projection on my.Autores{*,};

}

@(path:'/Admin') service auth  @(requires: 'scope1'){

    entity libros as projection on my.Libros{*,};
    @readonly
    entity autores as projection on my.Autores{*,};

}