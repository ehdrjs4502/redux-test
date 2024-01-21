import { useState } from "react";

const useInput = (data) => {
  const [text, setText] = useState(data);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return { text, setText, onChangeText };
};

export default useInput;
