import Element from './Element.js';
import FilterLink from './FilterBtn.js';
import { VisibilityFilters } from '../states/actions.js';

class Footer extends Element {
  constructor(store) {
    super();
    this._$ = document.createElement('div'); 
    const _$showLabel = document.createElement('span');
    this._$.appendChild(_$showLabel);

    // TODO Filters
    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_ALL));
    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_ACTIVE));
    this._$.appendChild(new FilterBtn(store, VisibilityFilters.SHOW_COMPLETED));
  }
}


export default Footer;
