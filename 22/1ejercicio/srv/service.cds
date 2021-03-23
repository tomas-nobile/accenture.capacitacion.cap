using {ejercicio as my} from '../db/schema';

service api {

    entity web as select from my.Web

}