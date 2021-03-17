using { futbol as my } from '../db/schema';

service api {

    entity partidos as projection on my.Partidos;
    entity equipos as projection on my.Equipos;
    entity jugadores as projection on my.Jugadores;
    entity estadios as projection on my.Estadios;
    entity puntajes as projection on my.Puntajes;
    entity resultados as projection on my.Resultados;

    entity mas3goles as select from my.Puntajes{*,
        jugador.nombre as nombre,
        goles as goles,
    }where goles >3;

    entity partido3omas as select from my.Resultados{*,
        resultadoLocal as resultadoLocal,
        resultadoVisitante as resultadoVisitante,
        partido.equipoLocal.nombre as EquipoLocal,
        partido.equipoVisitante.nombre as EquipoVisiante
    }where resultadoLocal >= 3 or resultadoVisitante >=3;

    entity massalvadas as select from my.Puntajes{*,
        salvadas as salvadas,
        jugador.nombre as nombre,
        jugador.posicion as posicion
    }where jugador.posicion = 'POR' order by salvadas DESC limit 1;

    

    entity jugadormascaro as select from my.Jugadores{*,
        valor as valor,
        nombre as nombre
    }order by valor DESC limit 1 

}
