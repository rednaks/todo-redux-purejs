import todoApp from './reducers.js'

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions.js'

window.store = Redux.createStore(todoApp);
