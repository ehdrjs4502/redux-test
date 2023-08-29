import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo, deleteToDo }) {
  const [text, setText] = useState();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  // store.js에 있는 state를 가져와 props로 state를 보내줌
  return { toDos: state };
}

function mapDispatchToPorps(dispatch) {
  // action을 reducer 함수에게 보내는 역할을 가진 dispatch를 props로 보낼 수 있음
  return {
    addToDo: (text) => {
      dispatch(actionCreators.addToDo(text));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToPorps)(Home); // 컴포넌트들을 store에 연결(connect)
