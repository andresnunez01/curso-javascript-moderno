import './style.css'
import { App } from './todos/app'
import todoStore from './store/todo.store'

//Inicia el estado al iniciar el HTML
todoStore.initStore();

App('#app')