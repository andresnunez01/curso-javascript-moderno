


/**
 * 
 * @param { String } carta 
 * @param { Number } turno 
 * @param { NodeListOf<Element>} divCartasJugadores 
 */
export const crearNuevaCarta = (carta, turno, divCartasJugadores) => {


    let nuevaCarta = document.createElement("img");
    nuevaCarta.classList.add("carta");
    nuevaCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugadores[turno].append(nuevaCarta);
  };