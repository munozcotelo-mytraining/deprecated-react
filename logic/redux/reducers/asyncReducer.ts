import { IAsyncDTO, IAsyncActionDTO } from './../IDTOS.class';

const byDefault: IAsyncDTO = {
  error: false,
  fetching: false,
  elements: []
};

function asyncReducer(state: IAsyncDTO = byDefault, action: IAsyncActionDTO) {
  switch (action.type) {
    case 'SET_ELEMENTS':
      state.elements = action.data.elements;
      return state;

    case 'SET_LOADING':
      state.fetching = action.data.fetching;
      return state;

    case 'SET_ERROR':
      state.error = action.data.error;
      return state;

    default:
      return state;
  }
}

export { asyncReducer };
