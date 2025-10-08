

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const PromiseRaceComponent = ( element ) => {

    console.log( 'PromiseRaceComponent' )

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        FastPromise(),
    ]).then( renderValue );

}



    const slowPromise = () => new Promise( resolve => {
        setTimeout(() => {
            resolve('Slow Promise')
        }, 2000);
    })

    const mediumPromise = () => new Promise( resolve => {
        setTimeout(() => {
            resolve('Medium Promise')
        }, 1500);
    })

    const FastPromise = () => new Promise( resolve => {
        setTimeout(() => {
            resolve('Fast Promise')
        }, 1000);
    })