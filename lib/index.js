const axios = require("axios")
const cheerio = require('cheerio');

class RCivil{
    static hash1= `<i class="fa fa-exclamation fa-2" style="color: red;"></i>`
    static hash2= `</div>`
    static urlBase="https://apicake.mendoza.gov.ar/APIcake/Tramites/"

    static step2=`${RCivil.urlBase}step_2/`
    static turnos = `${RCivil.urlBase}step_2_turnos_disponibles/`
    constructor(dni){
        this.debug=false
        this.dni=dni
    }
turnos(cb){
  let o ={
    org_cod:"REGC",
    tra_cod:41
   }
    axios.post(RCivil.turnos,o).then((response) => {
        if(this.debug)console.log(response);
        let l1= response.data.indexOf(RCivil.hash1)
        let l2 = response.data.indexOf(RCivil.hash2,l1-1)
        let res=response.data.slice(l1+RCivil.hash1.length,l2)
        if (l1==-1){
         res=response.data.slice(0,l2)+ "</div></div></div>"
         let $ = cheerio.load(res);
         res=$('select').text().split("\n").slice(2)
         res.pop();
         res=res.map(a=>a.slice(a,a.length-6)).join(",")
        }
        cb(res)
    
    
    }, (error) => {
        console.log(error);
      });

}

}

module.exports = RCivil;