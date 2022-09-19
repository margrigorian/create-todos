import {combineReducers, createStore} from "redux";
import { initialUserState } from "./slices/user-slice";
import { initialTodosState } from "./slices/todos-slice";
import userReducer from "./slices/user-slice";
import todosReducer from "./slices/todos-slice";

const store = createStore(combineReducers({
    user: userReducer,
    todos: todosReducer
}, {
    user: initialUserState,
    todos: initialTodosState
}));

export default store;