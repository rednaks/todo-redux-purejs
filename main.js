import './states/store.js'
import './components/App.js';

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log('DISABLED: saving state to local storage: ',  state);
  //window.localStorage.setItem('state', JSON.stringify(state));
});
