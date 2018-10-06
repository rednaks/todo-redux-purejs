import Todo from './Todo.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        // display: inline-block;
      }
    </style>

    <ul></ul>
  `;

export default class TodoList extends HTMLElement {
  constructor({todos, toggleTodo}) {
    super();
    this.appendChild(template.content.cloneNode(true));

    this._$ = document.createElement('ul');
    const container = this.querySelector('ul');
    todos.forEach((todo) => {
      const $todo = new Todo({...todo, onClick: () => {store.dispatch(toggleTodo(todo.id))}});
      container.appendChild($todo);
    });
  }
}

customElements.define('c-todo-list', TodoList);
