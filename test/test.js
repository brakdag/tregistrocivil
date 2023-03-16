const RegistroCivil = require("../lib/index.js")
const rc = new RegistroCivil("36788680")

describe("Testeando la clase", function(done){
    it("Prueba de turno",function(done){
      rc.turnos(x=>{
        console.log(x);
        done();
    });  
    })
})