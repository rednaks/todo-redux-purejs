import './AddTodo.js';
import './Footer.js';
import './VisibleTodoList.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        display: inline-block;
      }
    </style>

    <nav class="level">
      <div id="container" class="has-text-centered">
        <c-add-todo></c-add-todo>
        <c-visible-todo-list></c-visible-todo-list>
        <c-footer></c-footer>
      </div>
    </nav>
  `;

export default class TodoApp extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // const container = this.querySelector('#container');
  }
}

customElements.define('c-todo-app', TodoApp);
