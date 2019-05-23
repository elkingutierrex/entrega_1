 const cursos = [{
 		id: 1,
 		nombre: 'fundamentos nodejs',
 		duracionhoras: 36,
 		valor: 356000
 	},
 	{
 		id: 2,
 		nombre: 'programacion funcional',
 		duracionhoras: 25,
 		valor: 488000
 	},
 	{
 		id: 3,
 		nombre: 'metodologia scrum',
 		duracionhoras: 12,
 		valor: 156000
 	},
 	{
 		id: 4,
 		nombre: 'javascript avanzado1',
 		duracionhoras: 40,
 		valor: 444000
 	},
 	{
 		id: 5,
 		nombre: 'javascriptavanzado2',
 		duracionhoras: 36,
 		valor: 427000
 	}
 ];

 

 let viewCursos = () => {
	console.log('Bienvenido al tecnologio de Antioquia, los cursos ofertados son:')
 	cursos.forEach((curso, index) => {
 		setTimeout(() => {
			 console.log('=============================' );
			 console.log('ID Curso	:' + curso.id );
			 console.log('Nombre Curso	:' + curso.nombre );
			 console.log('Duracion Horas	:' + curso.duracionhoras);
			 console.log('Valor Curso	$' + curso.valor );		

			if(cursos.length == (index)){ 
				console.log('Ver Instrucciones de matricula al inicio del encabezado');
			}
		 },index*2000)
 	});
 };


 module.exports = {
	 viewCursos
	 ,cursos
 }

