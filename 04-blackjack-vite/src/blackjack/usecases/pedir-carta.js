/**
 * 
 * @param {Array<String>} deck ARRAY DE CARTAS REVUELTO
 * @returns TOMA UNA CARTA DEL DECK Y LA RETORNA
 */


// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
