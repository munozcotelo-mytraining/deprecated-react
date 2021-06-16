import { IVisibilityFilterActionDTO } from './../IDTOS.class';

function visibilityFilterReducer(
  state: string = 'SHOW_ALL',
  action: IVisibilityFilterActionDTO
) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

export { visibilityFilterReducer };
