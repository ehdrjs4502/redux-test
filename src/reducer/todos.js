import { createSlice } from "@reduxjs/toolkit";

/*
createSlice 함수를 사용하여 Redux 스토어에서 관리할 To-Do 목록의 슬라이스를 생성합니다. 
슬라이스는 상태와 관련된 리듀서 함수와 액션 생성자를 함께 정의합니다.
*/
export const toDos = createSlice({
    name: "toDosReducer", // 슬라이스의 이름
    initialState: [], // 초기 상태는 빈 배열
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() }); // action.payload는 액션에 전달된 데이터
            // redux toolkit은 immer.js를 사용하기 때문에 mutate 가능
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

/*
toDos 슬라이스에서 정의한 "add"와 "remove" 액션 생성자를 내보냅니다. 
이를 통해 컴포넌트에서 이 액션 생성자를 사용하여 액션을 디스패치할 수 있습니다.
*/
export const { add, remove } = toDos.actions;

/*
toDos.reducer는 슬라이스의 리듀서 함수를 나타냅니다. 
이 리듀서 함수는 액션을 처리하여 슬라이스의 상태를 업데이트합니다. 
이 리듀서 함수를 Redux 스토어에 등록하여 상태 변경을 관리합니다.
*/
export default toDos.reducer;
