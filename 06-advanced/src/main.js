import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './concepts/01-environments'
import { callbacksComponent } from './concepts/02-callbacks'
import { promiseComponent } from './concepts/03-promises'
import { PromiseRaceComponent } from './concepts/04-promise-race'
import { asynComponent } from './concepts/05-async'
import { asynAwaitComponent } from './concepts/06-async-await'
import { asyncAwaitComponent2 } from './concepts/07-async-await'
import { forAwaitComponent } from './concepts/08-for-await'
import { generatorFunctionsComponent } from './concepts/09-generators'
import { generatorAsyncComponent } from './concepts/10-generators-aync'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`
const element = document.querySelector('.card')

// environmentsComponent(element)
// callbacksComponent(element);
// promiseComponent(element);
// PromiseRaceComponent(element);
// asynComponent(element);
// asynAwaitComponent(element);
// asyncAwaitComponent2(element);
// forAwaitComponent(element);
// generatorFunctionsComponent(element);
generatorAsyncComponent(element);