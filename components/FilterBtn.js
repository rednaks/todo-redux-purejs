import Element from './Element.js';
import {
    setVisibilityFilter
} from '../states/actions.js'

export default class FilterBtn extends Element {
  constructor(store, displayName, visibilityFilter) {
    super();
    this._$ = document.createElement('button');
    this._$.disabled = false;
    this._$.innerHTML = displayName;
    this._$.style.marginLeft = '4px';
    this._visibilityFilter = visibilityFilter;

    this._$.addEventListener('click', () => {
      store.dispatch(setVisibilityFilter(this._visibilityFilter));
    });

    store.subscribe(() => {
      const state = store.getState();
      console.log('FilterBtn: ', state);
      this._$.disabled = (this._visibilityFilter === state.visibilityFilter);
    });
  }
}

