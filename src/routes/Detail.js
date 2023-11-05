import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
    const toDos = useSelector((state) => state.todos);
    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
    console.log(id, toDo);
    return (
        <>
            <h1>디테일</h1>
            <h4>{toDo?.text}</h4>
        </>
    );
}

export default Detail;
