import Element from './Element.js';

export default class Todo extends Element {
  constructor ({text, completed, onClick}){
    super();

    this._completed = completed;
    this._$ = document.createElement("a");
    this._$.classList.add('panel-block');
    
    const $checkBox = document.createElement('input');
    console.log($checkBox);
    $checkBox.type = 'checkbox';
    $checkBox.checked = completed ? true : false;

    this._$.appendChild($checkBox);

    const $text = document.createElement('span');
    $text.style.textDecoration = completed ? 'line-through' : 'none';


    $text.innerText = text;
    this._$.appendChild($text); 
    this._$.addEventListener('click', onClick.bind(this));
  }

}

