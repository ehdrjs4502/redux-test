import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState();

    // 인풋 입력시 text에 저장 함수
    function onChange(e) {
        setText(e.target.value);
    }

    // ToDo 항목 추가 후 text 초기화 함수
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    console.log(toDos);

    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos?.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </div>
    );
}

/*
mapStateToProps 함수는 Redux store의 상태를 컴포넌트의 toDos props로 매핑합니다. 
이를 통해 컴포넌트는 현재 To-Do 목록을 사용할 수 있습니다.
 */
function mapStateToProps(state) {
    // store.js에 있는 state를 가져와 props로 state를 보내줌
    return { toDos: state };
}

/*
mapDispatchToProps 함수는 Redux store와 컴포넌트를 연결하는 데 사용됩니다. 
이 함수는 addToDo 함수를 dispatch에 바인딩하여 컴포넌트의 addToDo props로 제공합니다.
*/
function mapDispatchToPorps(dispatch) {
    // action을 reducer 함수에게 보내는 역할을 가진 dispatch를 props로 보낼 수 있음
    return {
        addToDo: (text) => {
            dispatch(add(text));
        },
    };
}

/* 
connect 함수를 사용하여 Home 컴포넌트를 Redux store에 연결하고, 
mapStateToProps 및 mapDispatchToProps 함수를 사용하여 상태와 액션을 컴포넌트에 연결합니다.
*/
export default connect(mapStateToProps, mapDispatchToPorps)(Home); // 컴포넌트들을 store에 연결(connect)
// connet(상태, 액션)

/*
dispatch는 액션을 발생시키고, state는 앱의 현재 상태를 나타냅니다. 
액션과 리듀서를 통해 dispatch로 상태를 변경하고, 컴포넌트에서 state를 읽어와 사용할 수 있습니다.
 */
