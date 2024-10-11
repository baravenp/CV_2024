let opcion = 0;

while (opcion !== 5) {
    const mensaje = "¡Hola! Soy Eva, tu asistente virtual de Servicio al Cliente de Clavistel.\nEstoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas:\n1.- Boletas y Pagos\n2.- Señal y llamadas\n3.- Oferta comercial\n4.- Otras consultas\n5.- Salir";
    opcion = parseInt(prompt(mensaje));

    switch(opcion) {
        case 1:
            const mensaje1 = "Seleccione una opción:\n1.- Ver Boleta\n2.- Pagar cuenta";
            const opc1 = parseInt(prompt(mensaje1));
            if(opc1 == 1){
                alert("Haga click aquí para descargar su boleta.");
            } else if(opc1 == 2){
                alert("Usted está siendo transferido. Espere por favor...");
            } else {
                alert("Por favor, ingrese una opción válida...");
            }
            break;
        case 2:
            const mensaje2 = "Seleccione una opción\n1.- Problemas con la señal\n2.- Problemas con las llamadas";
            const opc2 = parseInt(prompt(mensaje2));
            if(opc2 == 1 || opc2 == 2){
                const msj = "A continuación escriba su solicitud";
                const solicitud = String(prompt(msj));
                alert(`Estimado usuario, su solicitud: '${solicitud}' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
            } else {
                alert("Por favor, ingrese una opción válida...");
            }
            break;
        case 3:
            const mensaje3 = "¡Clavistel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo, escribe 'SI' y un ejecutivo te llamará. De lo contrario, ingrese 'NO'.";
            const solicitud3 = String(prompt(mensaje3)).toLowerCase();
            if(solicitud3 === 'si'){
                alert("Un ejecutivo contactará con usted :)");
            } else if(solicitud3 === 'no'){
                alert("Gracias por preferir nuestros servicios :D");
            } else {
                alert("Por favor, ingrese 'SI' o 'NO'.");
            }
            break;
        case 4:
            const msj4 = "A continuación escriba su consulta";
            const solicitud4 = String(prompt(msj4));
            alert(`Estimado usuario, su consulta: '${solicitud4}' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
            break;
        case 5:
            alert("Gracias por utilizar nuestros servicios. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Gracias por preferir nuestros servicios :D");
    }
}
