import Element from './Element.js';
import TodoList from './TodoList.js';

import { VisibilityFilters, toggleTodo } from '../states/actions.js';

export default class VisibleTodoList extends Element {
  constructor() {
    super();
    // TODO unsubscribe
    this._$ = document.createElement('nav');
    this._$.classList.add('panel');
    store.subscribe(() => {
      const state = store.getState();
      const todos = this.getVisibleTodoList(state.todos, state.visibilityFilter);
      const todoList = new TodoList({todos, toggleTodo});

      // FIXME: is there a better way to do this ?:
      const _$parent = this._$.parentElement;
      _$parent.removeChild(this._$);
      this._$ = todoList.dom();
      _$parent.appendChild(this._$);


    });
  }
  
  getVisibleTodoList(todos, visibilityFilter) {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error('Unknown filter: ' + visibilityFilter);
      }
  }
};

