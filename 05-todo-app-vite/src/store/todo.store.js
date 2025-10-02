import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}


const state = {
    todo: [
        new Todo('Sable de luz'),
        new Todo('Speeder'),
        new Todo('Templo Jedi'),
    ],
    filter: Filters.All
}



const initStore = () => {

    
}


export default {
    initStore,

}