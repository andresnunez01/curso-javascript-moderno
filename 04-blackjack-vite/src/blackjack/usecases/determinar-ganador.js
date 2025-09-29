

/**
 * 
 * @param {Array<Number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) =>{

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (
        (puntosMinimos === 21 && puntosComputadora != 21) ||
        (puntosMinimos < 21 && puntosMinimos > puntosComputadora) ||
        (puntosComputadora > 21 && puntosMinimos < 21)
      ) {
        alert("GANASTE");
      } else if (puntosComputadora === puntosMinimos) {
        alert("EMPATE");
      } else {
        alert("PERDISTE");
      }
    }, 500);
  }
