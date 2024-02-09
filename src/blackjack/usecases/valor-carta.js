/**
 * 
 * @param {String} carta  carta de la baraja
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( carta ) => {

    if( !carta ) {
        throw 'La carta es requerida';
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}