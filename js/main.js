let inputTexto = document.querySelector('.texto');
let inputUrgente = document.querySelector('#urgente');
let inputDiario = document.querySelector('#diario');
let inputMensual = document.querySelector('#mensual');
let inputGuardar = document.querySelector('.guardar');
let contadorTarea = 2;
let inputBuscar = document.querySelector('#buscar');
let btnEditar = document.querySelector('.editButton');
let btnEliminar = document.querySelector('.removeButton');

inputGuardar.addEventListener('click', capturarDatos);

function capturarDatos(event) {
    event.preventDefault();
    //console.log(capturarDatos);
    let urgente = urgente.value;
    let diario = diario.value;
    let mensual = mensual.value;

    const newTarea = {
        id: contadorTarea,
        urgente: urgente,
        diario: diario,
        mensual: mensual,
    }

    // console.log(newTarea);

    //hago la funcion de guardar Tarea una vez que tengo los datos capturados

    function guardarTarea(newTarea) {
        toDo.push(newTarea);
    }
    //console.log(pTarea);






}