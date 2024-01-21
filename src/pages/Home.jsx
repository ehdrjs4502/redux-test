import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../reducer/todos";
import ToDo from "../components/ToDo";
import useInput from "../hooks/useInput";

function Home() {
  const { text, setText, onChangeText } = useInput("");
  const toDos = useSelector((state) => state.todos); // Redux store로부터 toDos 상태를 가져옴
  const dispatch = useDispatch(); // Redux에서 액션을 디스패치(발생)하고, 이 액션을 통해 상태를 변경하는 역할

  // ToDo 항목 추가 후 text 초기화 함수
  const onClickAdd = () => {
    dispatch(add(text)); // redux store로 디스패치하며, text를 액션과 함께 전달하여 새로운 To-Do 항목을 추가하는 동작
    setText("");
  };

  // 엔터 클릭시 onClickAdd 함수 실행
  const onEnterKeyDown = (e) => {
    e.key === "Enter" && onClickAdd();
  };

  return (
    <div>
      <h1>To Do</h1>
      <div>
        <input type="text" value={text} onChange={onChangeText} onKeyDown={onEnterKeyDown} />
        <button onClick={onClickAdd}>Add</button>
      </div>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
