import { pedirCarta, acumularPuntos, determinarGanador, crearNuevaCarta } from "./index";

/**
 * 
 * @param { Array<String> } deck 
 * @param { Array<Number>} puntosJugadores 
 * @param { NodeListOf<Element> } smallsPts 
 * @param { NodeListOf<Element> } divCartasJugadores 
 */

//LOGICA DE JUEGO DE LA COMPUTADORA DESPUES DE LOS CASOS DE JUEGO DEL JUGADOR
export const turnoComputadora = (deck, puntosJugadores, smallsPts, divCartasJugadores) => {

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, smallsPts)

        crearNuevaCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    } while (puntosComputadora < puntosJugadores[0] && puntosJugadores[0] <= 21);

    determinarGanador( puntosJugadores );
  };