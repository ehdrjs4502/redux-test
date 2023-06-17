import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO, 
    text
  };
}

const deleteToDO = id => {
  return {
    type: DELETE_TODO, 
    id
  };
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO :
      return [...state, {text: action.text, id: Date.now() }];
    case DELETE_TODO :
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default :
      return [];
  }
};

const store = createStore(reducer);

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDO = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDO(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDO);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos);
store.subscribe(() => {console.log(store.getState())});


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);