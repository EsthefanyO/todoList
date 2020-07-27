let inputTexto = document.querySelector('.texto');
let inputGuardar = document.querySelector('.guardar');
let contadorTarea = 2;
let btnBuscar = document.querySelector('#tareaBuscar');
let inputBuscar = document.querySelector('.buscarTarea');
let btnEditar = document.querySelector('.editButton');
let btnEliminar = document.querySelector('.removeButton');
let containerTareas = document.querySelector('.contenedorTareas');
let inputPrioridad = document.querySelector('#prioridad');


function borrarTarea(pTareaBorrar) {

    let tareaBorrar = document.getElementById(pTareaBorrar);
    containerTareas.removeChild(tareaBorrar);
    console.log(pTareaBorrar);
    borrar(pTareaBorrar);
}
function pintarTarea(pTarea) {
    containerTareas.innerHTML += ` <div style="" id="${pTarea.id}" class="tarea ${pTarea.prioridad}">
    <input type="text" class="item_input" value="${pTarea.titulo}" disabled>
    <button class="editButton" style="text-decoration:none">EDITAR</button>
    <button class="removeButton" onclick="borrarTarea(${pTarea.id})">ELIMINAR</button>
</div>`;

}

function pintarTareas(pListaTarea) {
    containerTareas.innerHTML = "";

    pListaTarea.forEach(tarea => {
        pintarTarea(tarea);
    });

}

inputGuardar.addEventListener('click', capturarDatos);

function capturarDatos(event) {
    event.preventDefault();
    //console.log(capturarDatos);

    let prioridad = inputPrioridad.value;

    const newTarea = { id: listaTarea.length + 1, titulo: inputTexto.value, prioridad }


    //hago la funcion de guardar Tarea una vez que tengo los datos capturados
    listaTarea.push(newTarea);
    pintarTareas(listaTarea);
    inputTexto.value = "";
    inputPrioridad.value = "";

}

function buscarTarea() {
    let texto = inputBuscar.value.toLowerCase();
    let newLista = buscarTareas(texto);
    pintarTareas(newLista);
}


inputBuscar.addEventListener('input', buscarTarea);
pintarTareas(listaTarea);
