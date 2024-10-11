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

// Función para inicializar las barras de habilidades al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let html = document.getElementById("html");
    crearBarra(html);
    let javascript = document.getElementById("javascript");
    crearBarra(javascript);
    let python = document.getElementById("python");
    crearBarra(python);
    let aws = document.getElementById("aws");
    crearBarra(aws);

    // Inicializar EmailJS
    emailjs.init('yRoTIsbIs4tT7OgTE'); // Reemplaza con tu User ID de EmailJS

    // Selecciona el formulario con la clase de validación de Bootstrap
    const form = document.querySelector('.needs-validation');

    // Añade el evento 'submit' al formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Verifica si el formulario es válido
        if (form.checkValidity()) {
            // Obtén los valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;

            // Crea el objeto con los parámetros
            const templateParams = {
                from_name: nombre,
                reply_to: email,
                subject: asunto,
                message: mensaje
            };

            // Envía el correo usando EmailJS
            emailjs.send('service_cr7foqi', 'template_ct350z9', templateParams)
                .then(function (response) {
                    // Mostrar alerta de éxito con SweetAlert2
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correo enviado!',
                        text: 'Tu mensaje ha sido enviado con éxito.',
                        confirmButtonText: 'Aceptar'
                    });
                    form.reset(); // Resetea el formulario si el envío fue exitoso
                }, function (error) {
                    // Mostrar alerta de error con SweetAlert2
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo.',
                        confirmButtonText: 'Aceptar'
                    });
                });
        } else {
            // Si el formulario no es válido, muestra los mensajes de validación de Bootstrap
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Por favor, completa todos los campos correctamente antes de enviar.',
                confirmButtonText: 'Aceptar'
            });
        }

        // Añade la clase 'was-validated' para mostrar los estilos de validación de Bootstrap
        form.classList.add('was-validated');
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
