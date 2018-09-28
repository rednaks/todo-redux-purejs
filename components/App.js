import Element from './Element.js';
import AddTodo from './AddTodo.js';
import VisibleTodoList from './VisibleTodoList.js';
import Footer from './Footer.js';

export default class App extends Element {
// WIP
  constructor(store) {
    super();
    this._$ = document.createElement('div');
    this._$.append(new AddTodo(store).dom());
    this._$.append(new VisibleTodoList(store).dom());
    this._$.append(new Footer(store).dom());
  }
}
