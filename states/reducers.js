import { 
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters 
} from './actions.js'

// This is called Destructuring assignment:
// Extracts `SHOW_ALL` value from `VisibilityFilters` object.
const { SHOW_ALL } = VisibilityFilters 

let storedState;
try {
  storedState = JSON.parse(window.localStorage.getItem('state'));
} catch {
  console.error("Couldn't get the state from localstorage");
}
const initialState = storedState || {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const todos = (state=initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: action.id, text: action.text, completed: false}];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      });
    default:
      return state;
  };
}

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


const todoApp = Redux.combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;

