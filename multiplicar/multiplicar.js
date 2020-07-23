
//require file sistem
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite)=>{


let result = '';

for(i=1; i<=limite; i++){
  let resulta = (base * i);
  result = `${base} X ${i} = ${resulta}`;
   console.log(result);
}

}







crearArchivo = (base, limite) =>{

    return new Promise((resolve, reject) => {

      if(!Number(base)){
        reject('No es un numero.');
        return
      }

let resp ='';

for(i=1; i<=limite; i++){
   let result = (base * i);
   resp += `${base} x ${i} = ${result} \n`;
}



const data = new Uint8Array(Buffer.from(resp));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) 
    reject(err);
  else 
    resolve(`tabla-${base}.txt`)
});

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}

