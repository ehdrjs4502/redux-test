import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { login } from "../reducer/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { text: id, onChangeText: onChangeId } = useInput("");
  const { text: pw, onChangeText: onChangePw } = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLoginBtn = () => {
    dispatch(login({ id, pw }));
    navigate("/");
  };

  return (
    <div>
      <label>
        id
        <input type="text" value={id} onChange={onChangeId} />
      </label>
      <br />
      <label>
        pw
        <input type="text" value={pw} onChange={onChangePw} />
      </label>
      <button onClick={onClickLoginBtn}>로그인</button>
    </div>
  );
};

export default Login;
