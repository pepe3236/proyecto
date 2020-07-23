
const fs = require('fs');

crearSuma = (base) => {

    return new Promise((resolve, reject) =>{
            
let resultado = '';

for(i=1; i<=20; i++){
let resp = (parseFloat(base) + parseFloat(i));
    resultado += `${base} + ${i} = ${resp} \n`;
}



const data = new Uint8Array(Buffer.from(resultado));
fs.writeFile(`tablasuma/tabla-${base}.txt`, data, (err) => {
  if (err) 
    reject (err);
  else
    resolve (`tabla-${base}.txt`);
});
    })

}

module.exports = {
    crearSuma
}