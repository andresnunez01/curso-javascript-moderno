import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}


const state = {
    todos: [
        new Todo('Sable de luz'),
        new Todo('Speeder'),
        new Todo('Templo Jedi'),
    ],
    filter: Filters.All
}



const initStore = () => {
    loadStore();
    
}

const loadStore = ( description ) => {
    if ( !localStorage.getItem('state') ) return

    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

/**
 * 
 * @param { Filters } filter 
 * @returns 
 */
const getTodos = ( filter = Filters.All ) => {

    switch (filter) {
        case Filters.All:
            return [...state.todos];
    
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done)
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done)

        default:
            throw new Error(`Option ${ filter } is not valid`)
            break;
    }
}

const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is required');
    state.todos.push( new Todo( description ) );

    saveStateToLocalStorage();
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })

    saveStateToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)

    saveStateToLocalStorage();
}

const setFilter = ( newFilter ) => {
    if( !Object.values( Filters ).includes(newFilter) ){
        throw new Error(`Filter ${ newFilter } not found`)
    }

    state.filter = newFilter;

    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,

}