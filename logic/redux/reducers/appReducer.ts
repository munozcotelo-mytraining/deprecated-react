import { IStateDTO } from './../IDTOS.class';
import { todosReducer } from './todosReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

import { combineReducers } from 'redux';

/*
function appReducer(
  state: IStateDTO = { todos: [], visibilityFilter: '' },
  action
) {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
  };
}
*/

const appReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export { appReducer };
