
import { valorCarta } from "./valor-carta";
  

/**
 * 
 * @param { String } carta 
 * @param { Number } turno //cambiar a arreglo en caso de agregar jugadores
 * @param { Array<Number>} puntosJugadores 
 * @param { NodeListOf<Element>} smallsPts 
 * @returns 
 */
  
  //TURNO 0 = PRIMER JUGADOR Y ULTIMO SERA LA COMPUTADORA
export const acumularPuntos = (carta, turno, puntosJugadores, smallsPts) => {
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smallsPts[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  }