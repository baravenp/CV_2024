// Función para crear las barras de habilidades
function crearBarra(id_barra) {
    if (id_barra) { 
        for (let i = 0; i <= 16; i++) {
            let div = document.createElement("div");
            div.className = "e";
            id_barra.appendChild(div);
        }
    } else {
        console.error("El ID proporcionado no existe en el DOM.");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío por defecto para poder validar primero
        event.stopPropagation();

        // Verifica si el formulario es válido
        if (form.checkValidity()) {
            // Si es válido, muestra la alerta de confirmación antes de enviar
            Swal.fire({
                icon: 'info',
                title: 'Enviando...',
                text: 'Tu mensaje está siendo enviado, por favor espera.',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Envía el formulario automáticamente una vez que la alerta ha sido mostrada
                form.submit();
            });
        } else {
            // Si el formulario no es válido, muestra una alerta de advertencia
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Por favor, completa todos los campos correctamente antes de enviar.',
                confirmButtonText: 'Aceptar'
            });
        }

        form.classList.add('was-validated'); // Añade la clase de validación de Bootstrap
    });
});

// Variables y funciones para la animación de las barras de habilidades
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        const intervalHtml = setInterval(function() {
            pintarBarra(html, 15, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function() {
            pintarBarra(javascript, 14, 1, intervalJavascript);
        }, 100);
        const intervalPython = setInterval(function() {
            pintarBarra(python, 16, 2, intervalPython);
        }, 100);
        const intervalAWS = setInterval(function() {
            pintarBarra(aws, 15, 3, intervalAWS);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "gray";
    } else {
        clearInterval(interval);
    }
}

// Detectar el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function() {
    efectoHabilidades();
};
