import FilterBtn from './FilterBtn.js';
import { VisibilityFilters } from '../states/actions.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        display: inline-block;
      }
    </style>

    <div id="container">
      <span></span>
    </div>
  `;

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const container = this.querySelector('#container');

    const $allBtn = new FilterBtn('ALL', VisibilityFilters.SHOW_ALL, 'is-primary')
    container.appendChild($allBtn);

    const $activeBtn = new FilterBtn('ACTIVE', VisibilityFilters.SHOW_ACTIVE, 'is-info')
    container.appendChild($activeBtn);

    const $completedBtn = new FilterBtn('COMPLETED', VisibilityFilters.SHOW_COMPLETED, 'is-light')
    container.appendChild($completedBtn);
  }
}

customElements.define('c-footer', Footer);
