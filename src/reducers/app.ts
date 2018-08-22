import { isType } from 'typescript-fsa';
import { Action } from 'redux';
import { somethingHappened } from '../actions/app';

export interface State {}
const reducer = (state: State = {}, action: Action) => {
  if (isType(action, somethingHappened)) {
    return state;
  }
  return state;
};
export default reducer;
