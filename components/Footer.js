import Element from './Element.js';
import FilterBtn from './FilterBtn.js';
import { VisibilityFilters } from '../states/actions.js';

export default class Footer extends Element {
  constructor(store) {
    super();
    this._$ = document.createElement('div'); 
    const _$showLabel = document.createElement('span');
    this._$.appendChild(_$showLabel);

    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_ALL).dom());
    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_ACTIVE).dom());
    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_COMPLETED).dom());
  }
}


