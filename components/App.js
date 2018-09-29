import Element from './Element.js';
import AddTodo from './AddTodo.js';
import VisibleTodoList from './VisibleTodoList.js';
import Footer from './Footer.js';

export default class App extends Element {
// WIP
  constructor() {
    super();
    this._$ = document.createElement('nav');
    this._$.classList.add('level');

    const $container = document.createElement('div');
    $container.classList.add('has-text-centered');

    $container.append(new AddTodo().dom());
    $container.append(new VisibleTodoList().dom());
    $container.append(new Footer().dom());

    this._$.append($container);

  }
}
