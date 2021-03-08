let ramdom= new Promise((resolve,reject)=>{

    let valor = Math.floor(Math.random() * 2);

    if(valor===0){
        reject (alert("Da 0"))
    }else{
        resolve(confirm("Da 1 o 2"))
    }
})

ramdom.then().catch();