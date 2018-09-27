import Element from './Element.js';

class Todo extends Element {
  constructor ({text, completed, onClick}){
    super();

    this._completed = completed;
    this._$ = document.createElement("li");

    this._$.style.textDecoration = completed ? 'line-through' : 'none';
    this._$.innerHTML = text; 
    this._$.addEventListener('click', onClick.bind(this));
  }
}

export default Todo;
