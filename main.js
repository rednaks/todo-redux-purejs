import todoApp from './states/reducers.js'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './states/actions.js'

import App from './components/App.js';


const store = Redux.createStore(todoApp);
const app = new App(store);
document.body.appendChild(app.dom());

console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log(store.getState())});

//
//store.dispatch(addTodo('Learn about actions'));
//store.dispatch(addTodo('Learn about reducers'));
//store.dispatch(addTodo('Learn about store'));
//
//store.dispatch(toggleTodo(0));
//store.dispatch(toggleTodo(1));
//
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//console.log(store.getState());



unsubscribe();
