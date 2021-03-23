const cds = require("@sap/cds");
const axios = require("axios");
const schedule = require("node-schedule");
const https= require('https');
const { Web } = cds.entities;

const agent= new https.Agent({
    rejectUnauthorized: false
})


/* const job = schedule.scheduleJob('1 * * * * *',async function(){   */
  console.log('The answer to life, the universe, and everything!');

  axios.get('https://discovery-center.cloud.sap/platformx/Services',{
  header: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
  },
  httpsAgent: agent,
  rejectUnauthorized:false
  })
  .then(function (response) {
    // handle success
    
    const array= response.data.d.results;
   
    for (let i=0; i<array.length; i++) {
      const {ShortName, ShortDesc}= array[i];
      cds.run(INSERT.into(Web).entries({ShortDesc,ShortName}))
    }

    console.log('OK');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log("ERROR");
  })
  .then(function () {
    // always executed
  });
/*  });  */





