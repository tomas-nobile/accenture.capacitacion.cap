using {misAutos as my} from '../db/schema';

service api {

  entity Brand as
    select from my.Brand {*,};
}
