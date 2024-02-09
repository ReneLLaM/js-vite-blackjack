/**
 * 
 * @param {Array<String>} deck el deck de cartas     
 * @returns {String}
 */

export const pedirCarta = (deck) => {

    if (!deck) {
        throw 'No hay deck';
    }

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}