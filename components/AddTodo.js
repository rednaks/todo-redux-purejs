import Element from './Element.js';
import addTodo from '../state/actions.js';

class AddTodo extends Element {
  constructor(store) {
    super();
    this._$ = document.createElement('div');
    
    const _$form =  document.createElement('form');
    this._$.appendChild(_$form);

    const _$input = document.createElement('input');

    const _$submitBtn = document.createElement('button');
    _$submitBtn.type = 'submit';
    _$submitBtn.innerHTML = 'Add';

    _$form.appendChild(_$input);
    _$form.appendChild(_$submitBtn);
  
    _$form.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!this._$input.value.trim()) {
        console.log('empty input');
        return;
      }

      store.dispatch(addTodo(this._$input.value));
      this._$input.value = '';
    });

  }
}
