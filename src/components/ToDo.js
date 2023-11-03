import React from "react";
import { remove } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, deleteToDo, id }) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteToDo}>DEL</button>
        </li>
    );
}

/*
mapDispatchToProps 함수는 Redux store와 컴포넌트를 연결하는 데 사용됩니다. 
이 함수는 deleteToDo 함수를 dispatch에 바인딩하여 컴포넌트의 deleteToDo props로 제공합니다.
*/
function mapDispatchToPorps(dispatch, ownProps) {
    return {
        deleteToDo: () => {
            dispatch(remove(ownProps.id));
        },
    };
}

/* 
connect 함수를 사용하여 Home 컴포넌트를 Redux store에 연결하고, 
mapDispatchToProps 함수를 사용하여 액션을 컴포넌트에 연결합니다.
*/
export default connect(null, mapDispatchToPorps)(ToDo);
