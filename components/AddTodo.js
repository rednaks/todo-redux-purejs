import Button from './Button.js';

import { addTodo } from '../states/actions.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        display: inline-block;
      }
    </style>

    <div id="container"></div>
  `;
export default class AddTodo extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const container = this.querySelector('#container');

    const _$form =  document.createElement('form');
    _$form.classList.add('field', 'has-addons');
    container.appendChild(_$form);

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

customElements.define('c-add-todo', AddTodo);
