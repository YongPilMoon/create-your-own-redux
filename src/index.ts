import createStore from "./redux";
import type { Action } from "./redux";

function counter(state: any, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter, 0);

const incrementButton = document.querySelector("#INCREMENT");

incrementButton?.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

const decrementButton = document.querySelector("#DECREMENT");

decrementButton?.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

const count = document.querySelector("#count");

if (count) {
  count.innerHTML = `${store.getState()}`;
}

store.subscribe(() => {
  if (count) {
    count.innerHTML = `${store.getState()}`;
  }
});
