const template = document.createElement('template');

template.innerHTML = `
    <style>
      :host {
        // display: inline-block;
      }
    </style>

    <a class="panel-block">
      <input type="checkbox"></input>
      <span></span>
    </a>
  `;

export default class Todo extends HTMLElement {
  constructor ({text, completed, onClick}){
    super();
    this.appendChild(template.content.cloneNode(true));

    const checkBox = this.querySelector('input[type="checkbox"]');
    checkBox.checked = completed ? true : false;

    const span = this.querySelector('span');
    span.style.textDecoration = completed ? 'line-through' : 'none';
    span.innerText = text;

    const a = this.querySelector('a');
    a.addEventListener('click', onClick.bind(this));
  }
}

customElements.define('c-todo', Todo);
