import { ITodoActionDTO } from './../IDTOS.class';

function set(data: string[]) {
  const item = {
    type: 'SET_ELEMENTS',
    data: {
      elements: data
    }
  };

  return item;
}

function setLoading(loading: boolean) {
  const item = {
    type: 'SET_LOADING',
    data: {
      fetching: loading
    }
  };

  return item;
}

function setError(error: boolean) {
  const item = {
    type: 'SET_ERROR',
    data: {
      error: error
    }
  };

  return item;
}

function getElements() {
  return dispatch => {
    console.info(dispatch);
    dispatch(setLoading(true));
    dispatch(setError(false));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setError(false));
      dispatch(set(['a1', 'a2', 'a3']));
    }, 5000);
  };
}

export { getElements };
