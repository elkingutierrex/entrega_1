const opcCurso = require('./EducacionContinuaTda');
var express = require('express')
var app = express()
const fs = require('fs');

const opciones = {
    matricula: {
        default: 0,
        alias: 'm'
    },
    curso: {
        default: 0,
        alias: 'i'
    },
    nombre: {
        default: 0,
        alias: 'n',
    },
    cedula: {
        default: 0,
        alias: 'c',
    }

};

opcCurso.viewCursos()
const argv = require('yargs')
    .command('inscribirse', 'generar Matricula', opciones)
    .argv

let inscribirse = (argv) => {
     

    if (argv.m == 'inscribirse') {
        let cursoX;

        opcCurso.cursos.forEach((x) => {
            if (x.id == argv.i) {
                cursoX = x
            }
        })

        if (!cursoX) {
            console.log('El ID del curso que ingresastes NO EXISTE');
            return;
        } else {
            // texto txt             
            texto = ('El nombre del estudiante es: ' + argv.n + "\r\n" +
                    ' Con cédula de ciudadania # : ' + argv.c + "\r\n" +
                    ' se ha matriculado en el curso con id  : (' + argv.i + ')-' + cursoX.nombre + "\r\n" +
                    ' Tiene una duracion de de : '+cursoX.duracionhoras +' horas' + "\r\n" +
                    ' valor a cancelar de la matricula : $ ' + cursoX.valor);
            fs.writeFile(argv.n + argv.c + 'Matricula.txt', texto, (err) => {
                if (err) throw (err);                
                console.log('Se ha creado el archivo, y la matricula se ha generado correctamente, bienvenido al curso de ' + cursoX.nombre )
            })

            // texto html
            textoHtml = ('El nombre del estudiante es: <b>' + argv.n + '</b> <br/>' +
                        ' Con cédula de ciudadania # : <b>' + argv.c + '</b> <br/>' +
                        ' se ha matriculado en el curso con id  : <b>(' + argv.i + ')-' + cursoX.nombre + '</b> <br/>' +
                        ' Tiene una duracion de de : <b>'+cursoX.duracionhoras +' horas' + '</b> <br/>' +
                        ' valor a cancelar de la matricula : $ <b>' + cursoX.valor+ '</b> <br/>');

            app.get('/', function (req, res) {
                res.send(textoHtml)
              })
              
              app.listen(3000)

        }

    } else {        
        console.log('Si desea generar matricula digite: ' + "\n" +
            '-m=inscribirse' + "\n" +
            '-i=(EL ID DEL CURSO)' + "\n" +
            '-n=(SU NOMBRE)' + "\n" +
            '-c=(SU CEDULA)' + "\n");


        console.log('Cuando decidas matricularte no te olvides que en el TDA siempre tenemos una educación Continua!')
    }

}

inscribirse(argv);
