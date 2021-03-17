namespace futbol;

using { cuid, managed } from '@sap/cds/common';

entity Partidos : cuid, managed {
    cantidadPersonas: Integer;
    arbitro:String;
    relator:String;
    fechaPartido:Date;
    clasico:Boolean;
    equipoLocal: Association to Equipos;
    equipoVisitante:Association to Equipos;
    puntajes:Association to many Puntajes on puntajes.partido=$self;
    estadio: Association to Estadios;
    resultado: Composition of Resultados;
}

entity Equipos: cuid{
    nombre:String;
    division:String;
    puntos:Integer;
    cantidadJugadores: Integer;
    presupuesto:Integer;
    jugadores: Association to many Jugadores on jugadores.equipo=$self;
    partidos: Association to many Partidos on partidos.equipoLocal=$self or partidos.equipoVisitante=$self;
    /* partidosLocal:Association to many Partidos on partidosLocal.equipoLocal=$self;
    partidosVisitante:Association to many Partidos on partidosVisitante.equipoVisitante=$self; */
    estadios: Association to Estadios; 
}

entity Jugadores:cuid{
    nombre:String;
    valor:Integer;
    apodo:String;
    posicion:String;
    nacionalidad:String;
    numero:Integer;
    equipo: Association to Equipos;
    puntaje:Association to many Puntajes on puntaje.jugador=$self;
}

entity Estadios:cuid{
    nombre:String;
    direccion:String;
    capacidad:Integer;
    equipos: Association to many Equipos on equipos.estadios=$self;
    partidos:Association to many Partidos on partidos.estadio=$self;
}

entity Puntajes : cuid {
    goles:Integer;
    asistencias:Integer;
    salvadas:Integer;
    jugador: Association to Jugadores;
    partido: Association to Partidos;
}

entity Resultados: cuid{
    resultadoLocal: Integer;
    resultadoVisitante:Integer;
    partido: Association to Partidos;
}

