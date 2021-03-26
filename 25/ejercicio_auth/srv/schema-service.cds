using {libreria as my} from '../db/schema';

@(path:'/AdminService')service api @(requires:'scope1'){
    entity libros as select from my.Libros{*,};
    @readonly
    entity autores as select from my.Autores{*,};
}
@(path:'/AuthService')service servicio @(requires:'authenticated-user'){
    entity libros as select from my.Libros{*,};
    @readonly
    entity autores as select from my.Autores{*,};
}

