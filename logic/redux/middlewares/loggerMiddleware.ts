import { Store, Dispatch, AnyAction } from 'redux';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const loggerMiddleware = (store: Store) => (next: Dispatch) => (
  action: AnyAction
): unknown => {
  console.info('MIDDLEWARE action', action);

  console.info('MIDDLEWARE state before', store.getState());

  /* control error */
  let result: unknown = null;
  try {
    result = next(action);
    console.info('MIDDLEWARE state after', store.getState());
  } catch (error) {
    console.info('MIDDLEWARE Error captured', error);
  }

  return result;
};

export { loggerMiddleware };
