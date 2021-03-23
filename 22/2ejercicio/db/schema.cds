using { cuid,managed } from '@sap/cds/common';
namespace proyecto; 


entity Proyectos : cuid, managed {
    nombre:String;
    cliente: Association to Clientes;
    tecnologias: Association to many ProyectosTecnologias on tecnologias.proyecto=$self;
    dificultad: Integer enum{
        bajo=1;
        medio=2;
        alto=3
    };
    totalHoras:Integer;
    total:Decimal;
    diasHabiles:Integer;
}

entity Tecnologias:cuid{
    nombre: String;
    proyectos: Association to many ProyectosTecnologias on proyectos.tecnologia=$self;
    precioxHS:Integer;
}

entity Clientes : cuid{
    nombre:String;
    proyecto: Association to Proyectos;
}

entity Formulario : cuid {
    nombreCliente: String;
    nombreProyecto:String;
    tecnologias: array of{
        nombre:String;
        hs:Integer;
    };
    dificultad:Integer;
}

entity ProyectosTecnologias : cuid {
    tecnologia: Association to Tecnologias; 
    proyecto: Association to Proyectos;
    subtotal:Decimal(9,2);
    hs:Integer;

}

