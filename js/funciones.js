
function borrar(pId) {

    let id = parseInt(pId);
    let posicionBorrar = listaTarea.findIndex(tarea => tarea.id == id);
    listaTarea.splice(posicionBorrar, 1);
}

function buscarTareas(pTexto) {
    return listaTarea.filter(tarea => filtrarTarea(pTexto, tarea))
}

function filtrarTarea(pTexto, pTarea) {
    return (pTarea.titulo.toLowerCase().includes(pTexto) || pTarea.prioridad.toLowerCase().includes(pTexto))
}


