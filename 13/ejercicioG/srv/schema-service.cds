using {flight as my} from '../db/schema';

service api {

   
    entity planes as select from my.Planes{*,};
    entity infoplanes as select from my.InfoPlanes{*,};
    entity workers as select from my.Workers{*,};
    entity airlines as select from my.Airlines{*,};
    entity airports as select from my.Airports{*,};
    entity airpairl as select from my.AirportsAirlines {*,
        airports.name as Nombre_del_aeropuerto,
        airports.airlines.airlines.name as Nombre_de_la_aerolinea,
        airports.airlines.airlines.planes.info.cost as Costo,
        airports.airlines.airlines.planes.info.currency as Moneda,
        airports.airlines.airlines.planes.info.destination as Destino,
        airports.airlines.airlines.planes.info.takeoff as Salida,
        airports.airlines.airlines.planes.info.landing as Llegada,
        airports.airlines.airlines.workers.employees as Empleados
    }excluding { createdBy, modifiedBy };
}