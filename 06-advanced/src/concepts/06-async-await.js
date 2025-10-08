import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asynAwaitComponent = async ( element ) => {

    console.log( 'asynAwaitComponent' )

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';

    try {
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );

        element.innerHTML = `${ hero1.name } / ${ hero1.name }`;
    } catch (error) {
        element.innerHTML = error;
    }
    

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async ( id ) => {
    const hero = heroes.find( hero => hero.id === id);

    if ( !hero )
    throw `Hero with id ${ id } not found`

    return hero;
}