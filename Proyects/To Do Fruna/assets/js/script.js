// Array inicial de tareas
var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Referencias a los elementos del DOM
const botonAgregarTarea = document.querySelector('.btn-success');
const formulario = document.querySelector('#formulario');
const botonAgregar = formulario.querySelector('.btn-primary');
const inputTarea = document.querySelector('#nuevaTarea');
const cuerpoTabla = document.querySelector('#cuerpo-tabla');

// Función para actualizar la tabla con las tareas
function actualizarTabla() {
    // Limpiar la tabla antes de volver a llenarla
    cuerpoTabla.innerHTML = '';
    
    tareas.forEach((item, index) => {
        let fila = document.createElement('tr');

        let celdaTarea = document.createElement('td');
        celdaTarea.textContent = item.tarea;

        let celdaBoton = document.createElement('td');
        let botonFinalizar = document.createElement('button');
        botonFinalizar.textContent = 'Finalizar';
        botonFinalizar.className = 'btn btn-danger';

        // Agregar evento para eliminar la tarea
        botonFinalizar.addEventListener('click', () => {
            eliminarTarea(index);
        });

        celdaBoton.appendChild(botonFinalizar);
        fila.appendChild(celdaTarea);
        fila.appendChild(celdaBoton);
        cuerpoTabla.appendChild(fila);
    });
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    actualizarTabla();
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea !== '') {
        tareas.push({ tarea: nuevaTarea });
        actualizarTabla();
        inputTarea.value = ''; // Limpiar el formulario
        formulario.style.display = 'none'; // Ocultar el formulario
    }
}

// Mostrar/ocultar el formulario de agregar tarea
botonAgregarTarea.addEventListener('click', () => {
    formulario.style.display = (formulario.style.display === 'none' || formulario.style.display === '') ? 'block' : 'none';
});

// Agregar la nueva tarea al hacer clic en el botón "Agregar"
botonAgregar.addEventListener('click', agregarTarea);

// Inicializar la tabla con las tareas existentes
actualizarTabla();
