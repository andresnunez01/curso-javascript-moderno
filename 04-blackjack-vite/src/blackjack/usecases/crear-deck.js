import _ from 'underscore'


/**
 * 
 * @param {Array<String>} tiposDeCarta EJEMPLO: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales EJEMPLO: ['A','J','Q','K'];
 * @returns {Array} RETORNA UN NUEVO ARRAY DE CARTAS
 */


// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length == 0 )throw new Error('TiposDeCarta es obligatorio como un arreglo de String');

    if( !tiposEspeciales || tiposEspeciales.length == 0 )throw new Error('TiposDeCarta es obligatorio como un arreglo de String');


    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}