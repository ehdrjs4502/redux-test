import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todos";
import userReducer from "./reducer/user";

const rootReducer = {
  todos: todoReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
