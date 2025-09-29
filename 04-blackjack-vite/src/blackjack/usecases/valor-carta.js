/**
 * 
 * @param {String} carta
 * @returns {Number} RETORNA INT DEL VALOR DE LA CARTA
 */


//CONVERTIR EL VALOR DE LA CARTA DE STRING A INT
export const valorCarta = ( carta ) => {

        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
  

    
}