import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todos";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});
