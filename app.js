const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js')
const {crearSuma} = require('./sumas/suma.js')

let commando = argv._[0]

switch(commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e))
    break;

    default:
    console.log('Comando no reconocido.');
}


//console.log(process.argv);
/*
let argv2 = process.argv;
console.log(argv.base);
console.log(argv.limite);
*/
/*
let parametro = argv[2];
let base = parametro.split('=')[1]
*/

/*
crearSuma(base)
.then(archiv =>console.log(`Suma creada: ${archiv}`))
.catch(e =>console.log(e))
*/