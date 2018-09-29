import Element from './Element.js';
import FilterBtn from './FilterBtn.js';
import { VisibilityFilters } from '../states/actions.js';

export default class Footer extends Element {
  constructor() {
    super();
    this._$ = document.createElement('div'); 
    const _$showLabel = document.createElement('span');
    this._$.appendChild(_$showLabel);

    const $allBtn = new FilterBtn('ALL', VisibilityFilters.SHOW_ALL).dom()
    $allBtn.classList.add('is-primary');
    this._$.appendChild($allBtn);

    const $activeBtn = new FilterBtn('ACTIVE', VisibilityFilters.SHOW_ACTIVE).dom()
    $activeBtn.classList.add('is-info');
    this._$.appendChild($activeBtn);

    const $completedBtn = new FilterBtn('COMPLETED', VisibilityFilters.SHOW_COMPLETED).dom()
    $completedBtn.classList.add('is-light');
    this._$.appendChild($completedBtn);

  }
}


