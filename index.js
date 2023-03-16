const RegistroCivil = require("./lib/index.js")
const rc = new RegistroCivil("0")


setInterval(() => {
    rc.turnos(x=>{
        console.log(new Date().toLocaleString(),x)}
        );
}, 60000);