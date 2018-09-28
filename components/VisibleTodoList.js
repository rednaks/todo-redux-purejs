import Element from './Element.js';
import TodoList from './TodoList.js';

import { VisibilityFilters } from '../states/actions.js';

export default class VisibleTodoList extends Element {
  constructor(store) {
    super();
    // TODO unsubscribe
    store.subscribe(() => {
      const state = store.getState();
      const todos = this.getVisibleTodoList(state.todos, state.visibilityFilter);
      const todoList = new TodoList({todos});
      this._$ = todoList.dom();
    });
  }
  
  getVisibleTodoList(todos, visibilityFilter) {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
      }
  }
};

