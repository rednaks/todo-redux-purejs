import todoApp from './states/reducers.js'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './states/actions.js'

import App from './components/App.js';


window.store = Redux.createStore(todoApp);
const app = new App();
document.body.appendChild(app.dom());

console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log(store.getState())});


unsubscribe();
