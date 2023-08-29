import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, deleteToDo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={deleteToDo}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToPorps(dispatch, ownProps) {
  return {
    deleteToDo: () => {
      dispatch(actionCreators.deleteToDo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToPorps)(ToDo);
