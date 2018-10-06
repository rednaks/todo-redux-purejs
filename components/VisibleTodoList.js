import TodoList from './TodoList.js';

import { VisibilityFilters, toggleTodo } from '../states/actions.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        // display: inline-block;
      }
    </style>

    <nav class="panel"></nav>
  `;

export default class VisibleTodoList extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // TODO unsubscribe
    store.subscribe(() => {
      const state = store.getState();
      const todos = this.getVisibleTodoList(state.todos, state.visibilityFilter);
      const todoList = new TodoList({ todos, toggleTodo });

      const container = this.querySelector('nav');
      const oldList = this.querySelector('c-todo-list');
      oldList ? container.replaceChild(todoList, oldList) : container.appendChild(todoList);
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

customElements.define('c-visible-todo-list', VisibleTodoList);
