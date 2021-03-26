const cds = require("@sap/cds");
const { Proyectos,Tecnologias,Clientes,ProyectosTecnologias } = cds.entities;


module.exports = cds.service.impl(async (srv) => {

    srv.on('cotizacion', async (req)=>{

        const {nombreCliente,nombreProyecto, tecnologias,dificultad} = req.data.form;

        const cliente =await cds.run(INSERT.into(Clientes).entries({nombre:nombreCliente}));

        const proyectoObj={
            cliente_ID:cliente.results[0].values.pop(),
            nombre:nombreProyecto,
            dificultad
        }

        const proyecto =await cds.run(INSERT.into(Proyectos).entries(proyectoObj));

        
        const arr=[];

        for (const tecnologia of tecnologias) {
            const {nombre, hs}= tecnologia;

            const data= await cds.run(SELECT.from(Tecnologias).where({nombre}))
            const {ID, precioxHS}= data[0]

            const proyectoTecnologia={
                proyecto_ID:proyecto.results[0].values[3],
                tecnologia_ID:ID,
                hs,
                subtotal:precioxHS*hs 
                
            }
            arr.push(proyectoTecnologia)
            
        
        }

        await cds.run(INSERT.into(ProyectosTecnologias).entries(arr));

        const proyectoSel=await cds.run(SELECT.from(ProyectosTecnologias).where({proyecto_ID:proyecto.results[0].values[3]})) 

        let total=0;
        let horas=0;

        for (const e of proyectoSel) {
            console.log(e);
            horas+=e.hs;
            total+=e.subtotal;
        }

        if(dificultad==2){
            total*=1.5;
            horas*=1.5;
        }
        else if(dificultad==3){
            total*=2;
            horas*=2;
        }

        let dias=Math.floor((horas/8)%0==0?horas/8:(horas/8)+1)

        console.log(dias);


        await cds.run(UPDATE(Proyectos).set({total,totalHoras:Math.round(horas),diasHabiles:dias}).where({ID:proyecto.results[0].values[3]}))
        

    
    })
})