import Element from './Element.js';
import Button from './Button.js';

import { addTodo } from '../states/actions.js';

export default class AddTodo extends Element {
  constructor() {
    super();
    this._$ = document.createElement('div');
    
    const _$form =  document.createElement('form');
    _$form.classList.add('field', 'has-addons');
    this._$.appendChild(_$form);

    const _$input = document.createElement('input');
    _$input.classList.add('input');
    const _$inputContainer = document.createElement('div');
    _$inputContainer.classList.add('control');
    _$inputContainer.appendChild(_$input);

    const _$submitBtn = new Button().dom();
    _$submitBtn.type = 'submit';
    _$submitBtn.innerHTML = 'Add';

    const _$submitContainer = document.createElement('div');
    _$submitContainer.classList.add('control');
    _$submitContainer.appendChild(_$submitBtn);



    _$form.appendChild(_$inputContainer);
    _$form.appendChild(_$submitContainer);
  
    _$form.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!_$input.value.trim()) {
        console.log('empty input');
        return;
      }

      store.dispatch(addTodo(_$input.value));
      _$input.value = '';
    });

  }
}
