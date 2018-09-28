import Element from './Element.js';
import FilterBtn from './FilterBtn.js';
import { VisibilityFilters } from '../states/actions.js';

export default class Footer extends Element {
  constructor() {
    super();
    this._$ = document.createElement('div'); 
    const _$showLabel = document.createElement('span');
    this._$.appendChild(_$showLabel);

    this._$.appendChild(new FilterBtn('ALL', VisibilityFilters.SHOW_ALL).dom());
    this._$.appendChild(new FilterBtn('ACTIVE', VisibilityFilters.SHOW_ACTIVE).dom());
    this._$.appendChild(new FilterBtn('COMPLETED', VisibilityFilters.SHOW_COMPLETED).dom());
  }
}


