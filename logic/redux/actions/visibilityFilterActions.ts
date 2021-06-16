import { IVisibilityFilterActionDTO } from './../IDTOS.class';

function setVisibilityFilter(filter: string): IVisibilityFilterActionDTO {
  return { type: 'SET_VISIBILITY_FILTER', filter };
}

export { setVisibilityFilter };
