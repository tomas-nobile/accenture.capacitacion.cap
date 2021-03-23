using { proyecto as my } from '../db/schema';


service api{

    entity proyectos as projection on my.Proyectos{*,}excluding{createdBy,modifiedBy};
    entity tecnologias as projection on my.Tecnologias;
    entity clientes as projection on my.Clientes;
    entity formulario as projection on my.Formulario;
    entity proyectosTecnologias as projection on my.ProyectosTecnologias;
    entity vista as select from my.ProyectosTecnologias{*,
    proyecto.nombre as nombreProyecto,
    proyecto.cliente.nombre as nombreCliente,
    tecnologia.nombre as tecnologia,
    proyecto.total as total,
    proyecto.dificultad as dificultad
    };

    action cotizacion(form:formulario);
}