# create-your-own-redux
위 코드는 [Understand and Implement Your Own Redux](https://buttercms.com/blog/understand-and-implement-your-own-redux/) 글을 참고하여 작성하였습니다.
## CreateStore

`createStore`함수는 `reducer`와 초기상태(`initialState`)를 인자로 받습니다.

`const store = createStore(reducer, initialState)`

## Reducer

`reducer`는 **상태**와 **액션**을 인자로 받고 전달 받은 액션에 맞게 상태를 변경하고 변경된 상태를 반환합니다.

```typescript
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
```

## Store

`store`는 `getState`, `dispatch`, `subscribe`함수를 가지고 있습니다.

`const { getState, dispatch, subscribe } = store`

### getState

`getState`는 현재 상태를 반환합니다.

`const state = store.getState()`

### dispatch

`dispatch`는 `action`을 인자로 받고 `action.type`에 맞게 상태를 변화 시킵니다.

```typescript
store.getState(); // 1
store.dispatch({ type: "INCREMENT" });
store.getState(); // 2
```

### subscribe

`subscribe`는 `listener`함수를 인자로 받아 구독시킵니다.
구독된 `listener`는 `dispatch`가 수행되면 자동으로 실행됩니다.

이를 통해 변경된 상태 값을 view에 반영할 수 있습니다.

```typescript
store.subscribe(() => {
  if (count) {
    count.innerHTML = `${store.getState()}`;
  }
});
```

## 실행방법

패키지 설치

`yarn install`

webpack dev server 실행

`yarn start`
