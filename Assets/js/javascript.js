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

    // // Inicialización de las barras de habilidades
    // const html = document.getElementById("html");
    // const javascript = document.getElementById("javascript");
    // const python = document.getElementById("python");
    // const aws = document.getElementById("aws");

    // crearBarra(html);
    // crearBarra(javascript);
    // crearBarra(python);
    // crearBarra(aws);
}); 

// Variables y funciones para la animación de las barras de habilidades
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

// Función para crear las barras de habilidades
function crearBarra(id_barra, total_bloques) {
    if (id_barra) {
        for (let i = 0; i < total_bloques; i++) {
            let div = document.createElement("div");
            div.className = "e";
            id_barra.appendChild(div);
        }
    } else {
        console.error("El ID proporcionado no existe en el DOM.");
    }
}

// Función que rellena las barras según el porcentaje deseado
function pintarBarra(id_barra, porcentaje, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];

    if (id_barra) {
        const elementos = id_barra.getElementsByClassName("e");
        const totalElementos = elementos.length;
        const elementosARellenar = Math.floor((porcentaje / 100) * totalElementos );

        if (x < elementosARellenar) {
            elementos[x].style.backgroundColor = "gray";
        } else {
            clearInterval(interval); // Detener el intervalo si ya se ha alcanzado el número de elementos a rellenar
        }
    } else {
        console.error("No se encontró el elemento de la barra.");
        clearInterval(interval);
    }

    if (x >= totalElementos) {
        clearInterval(interval);
    }
}

// Función para aplicar el efecto de las habilidades
function efectoHabilidades() {
    const habilidades = document.getElementById("habilidades");
    if (!habilidades) return;

    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;

        // Definir las barras con la cantidad de bloques deseada (aquí 16 por ejemplo)
        const totalBloques = 18;
        const html = document.getElementById("html");
        const javascript = document.getElementById("javascript");
        const python = document.getElementById("python");
        const aws = document.getElementById("aws");
        const java = document.getElementById("java");

        crearBarra(html, totalBloques);
        crearBarra(javascript, totalBloques);
        crearBarra(python, totalBloques);
        crearBarra(aws, totalBloques);
        crearBarra(java, totalBloques);

        // Llenar las barras según el porcentaje establecido
        const intervalHtml = setInterval(function() {
            pintarBarra(html, 90, 0, intervalHtml); // 80% para HTML
        }, 100);
        const intervalJavascript = setInterval(function() {
            pintarBarra(javascript, 75, 1, intervalJavascript); // 70% para JavaScript
        }, 100);
        const intervalPython = setInterval(function() {
            pintarBarra(python, 95, 2, intervalPython); // 85% para Python
        }, 100);
        const intervalAWS = setInterval(function() {
            pintarBarra(aws, 85, 3, intervalAWS); // 80% para AWS
        }, 100);
        const intervaljava = setInterval(function() {
            pintarBarra(java, 35, 4, intervaljava); // 80% para AWS
        }, 100);
    }
}

// Detectar el scrolling para activar la animación
window.onscroll = function() {
    efectoHabilidades();
};




