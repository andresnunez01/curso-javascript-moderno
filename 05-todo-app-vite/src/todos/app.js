
import html from  './app.html?raw'
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from './use-cases';
/**
 * 
 * @param { String } elementId 
 */
export const App = ( elementId ) => {

 const ElementsIds = {
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filter',
    PendingCountLabel: '#pending-count'
 }



    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementsIds.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () =>{
        renderPending( ElementsIds.PendingCountLabel );

    }

    ( () => {
        const app = document.createElement('div');
        app.innerHTML =  html;
        document.querySelector(elementId).append( app );
        displayTodos();
    } )();

    //Referencias al DOM
    const newDesccriptionInput = document.querySelector( ElementsIds.NewTodoInput );
    const todoListUl = document.querySelector( ElementsIds.TodoList );
    const clearCompletedButton = document.querySelector( ElementsIds.ClearCompleted );
    const filtersLis = document.querySelectorAll( ElementsIds.TodoFilters );

    //Listeners
    newDesccriptionInput.addEventListener('keyup', ( event ) => {
        if ( event.code !== 'Enter') return;
        if ( event.target.value.trim().length === 0) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();

    });

    todoListUl.addEventListener('click', ( event ) => {
       

        const isElementDestroyed = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if ( !element || !isElementDestroyed ) return;

            todoStore.deleteTodo( element.getAttribute('data-id') );
            displayTodos();
        

    });


    clearCompletedButton.addEventListener( 'click', () => {

        todoStore.deleteCompleted();
        displayTodos();

    });

    filtersLis.forEach(element => {
        
        element.addEventListener('click', (element) => {
            filtersLis.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text){

                case 'Completados': 
                    todoStore.setFilter( Filters.Completed )
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
            }
            displayTodos();
        })
        
    });

}