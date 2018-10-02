import AddTodo from './AddTodo.js';
import VisibleTodoList from './VisibleTodoList.js';
import Footer from './Footer.js';

export default class TodoApp extends HTMLElement {
  constructor() {
    super();
    // this.root = this.attachShadow({ mode: 'open' });
    this._$ = document.createElement('nav');
    this._$.classList.add('level');
    this.appendChild(this._$);

    const $container = document.createElement('div');
    $container.classList.add('has-text-centered');

    $container.append(new AddTodo().dom());
    $container.append(new VisibleTodoList().dom());
    $container.append(new Footer().dom());

    this._$.append($container);
  }
}

window.customElements.define('c-todo-app', TodoApp);
