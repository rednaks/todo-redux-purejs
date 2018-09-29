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

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('saving state to local storage: ',  state);
  window.localStorage.setItem('state', JSON.stringify(state));
});


