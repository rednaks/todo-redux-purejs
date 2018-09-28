import Element from './Element.js';
import AddTodo from './AddTodo.js';
import VisibleTodoList from './VisibleTodoList.js';
import Footer from './Footer.js';

export default class App extends Element {
// WIP
  constructor() {
    super();
    this._$ = document.createElement('div');
    this._$.append(new AddTodo().dom());
    this._$.append(new VisibleTodoList().dom());
    this._$.append(new Footer().dom());
  }
}
