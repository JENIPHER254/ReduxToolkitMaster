import { createStore } from "redux";

const reducerFn = (
  state = { counter: 0, name: "Jenipher", title: "Learning React" },
  action
) => {
  // Do not mutate original state
  // Use async functions
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
      name: state.name,
      title: "ITEM HAS INCREASED",
    };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
      name: state.name,
      title: "ITEM HAS DECREASED",
    };
  }
  if (action.type === "ADD") {
    return {
      counter: state.counter + action.payload,
      name: state.name,
      title: "ITEM HAS INCREASED BY "+ action.payload,
    };
  }
  return state;
};

const store = createStore(reducerFn);
export default store;
