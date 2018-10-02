import { addTodo } from '../states/actions.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        display: inline-block;
      }
    </style>

    <div id="container">
      <form class="field has-addons">
        <div class="control">
          <input class="input"></input>
        </div>
        <div class="control">
          <button class="button">Add</button>
        </div>
      </form>
    </div>
  `;

export default class AddTodo extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const _$form = this.querySelector('form');
    const _$input = this.querySelector('input');

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
