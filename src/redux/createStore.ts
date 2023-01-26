export type Action = {
  type: string;
  payload?: any;
};

type Reducer<S = any> = (state: S, action: Action) => S;
type Listener = () => void;

function createStore<S>(reducer: Reducer, initialState: S) {
  let currentState = initialState;
  let listeners: Listener[] = [];

  function getState() {
    return currentState;
  }

  function dispatch(action: Action) {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(fn: Listener) {
    listeners.push(fn);

    // listner를 등록 해제 할 수 있도록 unsubscribe 함수 반환
    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  }

  const store = {
    getState,
    dispatch,
    subscribe,
  };

  return store;
}

export default createStore;
