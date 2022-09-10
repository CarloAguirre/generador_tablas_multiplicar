
const argv = require('yargs')
    .option('b', {                                         // Option nos permite crear un alias y establecer un type      
        alias:'base',
        demandOption: true,
        type:'number',
        describe:'Muestra la base de la tabla de multiplicar'
        
    })
    .option('l',{                                           // Si se envía el argv 'listar' o 'l' imprimira y creara la tabla
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Imprime la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type: "number",
        describe: 'Indica hasta que numero se multiplicara la base'
    })
    .check((argv, option)=>{                               // Check nos permite verificar el Type del Argv('base/b')
        if(isNaN(argv.b, argv.l)){
            throw new Error('La base debe ser numerica')
        }else{
            return true                                   // debo retornar 'true' para que el argumento sea validado
        }
    })
    .argv


    module.exports = argv;