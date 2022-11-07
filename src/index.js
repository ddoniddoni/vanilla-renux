import { legacy_createStore } from "redux";

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const conutModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(conutModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
