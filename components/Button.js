import Element from './Element.js';

export default class Button extends Element {
  constructor() {
    super();
    this._$ = document.createElement('button');
    this._$.classList.add('button');
  }
}
