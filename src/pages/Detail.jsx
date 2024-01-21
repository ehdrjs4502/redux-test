import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state.todos);
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(id, toDo, toDos);

  return (
    <>
      <h1>디테일</h1>
      <h4>{toDo?.text}</h4>
    </>
  );
}

export default Detail;
