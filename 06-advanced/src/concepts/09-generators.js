

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    // console.log( 'generatorFunctionsComponent' );
    // const myGenerator = myFirstGeneratorFunction();

    const genId = idGenerator();


    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButtonvalue = () => {

        const { value } = genId.next();
        button.innerText = `Click ${ value }`
    }

    button.addEventListener( 'click', renderButtonvalue )
    
}



function* idGenerator() {
    let currentId = 0;

    while(true){
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction(){

    yield 'Primer valor'
    yield 'Segundo valor'

    return 'No hay valores';
}