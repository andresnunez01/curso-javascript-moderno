import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asynComponent = ( element ) => {

    console.log( 'asynComponent' )

    const id1 = '5d86371f1efebc31def272e2';
    console.log('Inicio de componente')

    const renderHero = ( name) =>{ 
        element.innerHTML = name;
    }

    

    findHero( id1 )
        .then( renderHero )
        .catch( error => element.innerHTML = error);


    console.log( 'Fin del componente')

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

    return hero.name;
}