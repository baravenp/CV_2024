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
    // Selecciona el formulario con la clase de validación de Bootstrap
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Verifica si el formulario es válido
        if (form.checkValidity()) {
            // Alerta de confirmación con SweetAlert antes de enviar
            Swal.fire({
                icon: 'info',
                title: 'Enviando...',
                text: 'Tu mensaje está siendo enviado, por favor espera.',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Envía el formulario una vez que la alerta ha sido mostrada
                form.submit();
                
                // Muestra la alerta de éxito después de enviar
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido enviado con éxito. Pronto me pondré en contacto contigo ;).',
                    confirmButtonText: 'Aceptar'
                });
            });
        } else {
            // Alerta de advertencia si el formulario no es válido
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Por favor, completa todos los campos correctamente antes de enviar.',
                confirmButtonText: 'Aceptar'
            });
        }

        form.classList.add('was-validated'); // Añade la clase de validación de Bootstrap
    });

    // Inicialización de las barras de habilidades
    const html = document.getElementById("html");
    const javascript = document.getElementById("javascript");
    const python = document.getElementById("python");
    const aws = document.getElementById("aws");

    crearBarra(html);
    crearBarra(javascript);
    crearBarra(python);
    crearBarra(aws);
}); 

// Variables y funciones para la animación de las barras de habilidades
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades() {
    const habilidades = document.getElementById("habilidades");
    if (!habilidades) return;

    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;

        // Definir los elementos de barra antes de pintar
        const html = document.getElementById("html");
        const javascript = document.getElementById("javascript");
        const python = document.getElementById("python");
        const aws = document.getElementById("aws");

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

    // Verificar si los elementos y la barra existen
    if (id_barra) {
        const elementos = id_barra.getElementsByClassName("e");
        if (elementos[x]) {
            elementos[x].style.backgroundColor = "gray";
        } else {
            clearInterval(interval);
        }
    } else {
        console.error("No se encontró el elemento de la barra.");
        clearInterval(interval);
    }

    // Detener el intervalo si se alcanza la cantidad máxima
    if (x >= cantidad) {
        clearInterval(interval);
    }
}

// Detectar el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function() {
    efectoHabilidades();
};


