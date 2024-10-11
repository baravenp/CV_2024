function Cliente(nombre, ID, clave, saldo) {
    this.nombre = nombre;
    this.ID = ID;
    this.clave = clave;
    this.saldo = saldo;

    this.validar = function(inputNombre, inputClave) {
        return this.nombre === inputNombre && this.clave === inputClave;
    };

    this.verSaldo = function() {
        alert(`Tu saldo actual es: $${this.saldo}`);
    };

    this.realizarGiro = function(monto) {
        if (monto > this.saldo) {
            alert("Fondos insuficientes.");
        } else {
            this.saldo -= monto;
            alert(`Has girado $${monto}. Tu saldo actual es: $${this.saldo}`);
        }
    };

    this.realizarDeposito = function(monto) {
        this.saldo += monto;
        alert(`Has depositado $${monto}. Tu saldo actual es: $${this.saldo}`);
    };
}

var cliente1 = new Cliente("Juan Pérez", "C1", "Juanito123", 30000);
var cliente2 = new Cliente("Elvira Figueroa", "C2", "Elvirita321", 50000);
var cliente3 = new Cliente("Jorge Parrillero", "C3", "JorgitoParrillero", 100000);

function validarCliente() {
    alert("Esta es la versión demo! a continuación verá los usuarios para poder probar el sistema :D")
    alert("Usuarios con su clave registrados:\n[Juan Pérez ; Juanito123]\n[Elvira Figueroa ; Elvirita321]\n[Jorge Parrillero ; JorgitoParrillero]")
    const nombre = prompt("Ingrese su nombre");
    const clave = prompt("Ingrese su contraseña");

    let clienteValido = null;

    // Validar contra cada cliente
    if (cliente1.validar(nombre, clave)) {
        clienteValido = cliente1;
        alert("Bienvenido a Banca en Línea")
    } else if (cliente2.validar(nombre, clave)) {
        clienteValido = cliente2;
        alert("Bienvenido a Banca en Línea")
    } else if (cliente3.validar(nombre, clave)) {
        clienteValido = cliente3;
        alert("Bienvenido a Banca en Línea")
    } else {
        alert("ID o contraseña incorrectos.");
        return;
    }

    // Mostrar el menú de opciones
    let opcionMenu = 0;
    while (opcionMenu !== 4) {
        opcionMenu = parseInt(prompt(
            `Bienvenido, ${clienteValido.nombre}. Seleccione una opción:
            1. Ver saldo
            2. Realizar giro
            3. Realizar depósito
            4. Salir`
        ));

        switch (opcionMenu) {
            case 1:
                clienteValido.verSaldo();
                break;
            case 2:
                const montoGiro = parseFloat(prompt("Ingrese el monto a girar"));
                clienteValido.realizarGiro(montoGiro);
                break;
            case 3:
                const montoDeposito = parseFloat(prompt("Ingrese el monto a depositar"));
                clienteValido.realizarDeposito(montoDeposito);
                break;
            case 4:
                alert("Gracias por usar BancoChilean. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida.");
        }
    }
}

validarCliente();
