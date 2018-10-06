import { setVisibilityFilter } from '../states/actions.js'

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        display: inline-block;
        margin-left: 4px;
      }
    </style>

    <button class="button"></button>
  `;

export default class FilterBtn extends HTMLElement {
  constructor(displayName, visibilityFilter, btnClass) {
    super();
    this.appendChild(template.content.cloneNode(true));
    const btn = this.querySelector('button');
    btn.disabled = false;
    btn.classList.add(btnClass);
    btn.innerHTML = displayName;

    this._visibilityFilter = visibilityFilter;
  }

  connectedCallback() {
    const btn = this.querySelector('button');

    btn.addEventListener('click', () => {
      store.dispatch(setVisibilityFilter(this._visibilityFilter));
    });

    store.subscribe(() => {
      const state = store.getState();
      // console.log('FilterBtn: ', state);
      btn.disabled = (this._visibilityFilter === state.visibilityFilter);
    });
  }
}

customElements.define('c-filter-btn', FilterBtn);
