function jugar(eleccionUsuario) {
    var opciones = ['piedra', 'papel', 'tijera'];
    var eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    var resultado = '';

    if (eleccionUsuario === eleccionComputadora) {
        resultado = 'Empate';
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = '¡Perdiste!';

    }
    document.getElementById('resultado').innerHTML = `Elegiste ${eleccionUsuario}, la computadora eligió ${eleccionComputadora}. ${resultado}`;
}