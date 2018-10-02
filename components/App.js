import './AddTodo.js';
import Footer from './Footer.js';
import VisibleTodoList from './VisibleTodoList.js';

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
    const container = this.querySelector('#container');
    container.append(new VisibleTodoList().dom());
  }
}

customElements.define('c-todo-app', TodoApp);
