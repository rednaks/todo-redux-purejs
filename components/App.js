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
      </div>
    </nav>
  `;

export default class TodoApp extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.appendChild(template.content.cloneNode(true));
    // this._$ = document.createElement('nav');
    // this._$.classList.add('level');
    // this.appendChild(this._$);

    // const $container = document.createElement('div');
    // $container.classList.add('has-text-centered');

    // const addTodo = document.createElement('c-add-todo');
    // $container.append(addTodo);
    // $container.append(new VisibleTodoList().dom());
    // $container.append(new Footer().dom());

    // this._$.append($container);
  }

  connectedCallback() {
    const container = this.querySelector('#container');
    // const addTodo = document.createElement('c-add-todo');
    // container.append(addTodo);
    container.append(new VisibleTodoList().dom());
    container.append(new Footer().dom());
  }
}

customElements.define('c-todo-app', TodoApp);
