import {createStore} from "redux";

const store = createStore(reducer, {
    user: {
        name: "",
        email: ""
    },
    todos: []
});

// КАК Я ПОНЯЛА, ЧТОБЫ ВЫНЕСТИ В ОТДЕЛЬНЫЙ ДОКУМЕНТ ВСЕ ВАРИАНТЫ CASE, ПО КАЖДОМУ СЛУЧАЮ Я ДОЛЖНА ВЫЗЫВАТЬ
// ОТДЕЛЬНУЮ ФУНКЦИЮ, ПЕРЕДАВАЯ ЕЙ В ПАРАМЕТРЫ STATE И ACTION ИЗ REDUCER
// КАК МНЕ КАЖЕТСЯ, ЭТО НЕ ОБЛЕГЧИТ КОД
// ДРУГОЕ Я НЕ ПОМНЮ

function reducer(state, action) {
    switch (action.type) {
        case "user authorization" :
            return {
                ...state,
                user: {
                    name: action.name,
                    email: action.email
                }
            }
        case "user log out" :
            return {
                user: {
                    name: "",
                    email: ""
                },
                todos: []
            }
        case "add todo" :
            return {
                ...state,
                todos: [...state.todos, {status: false, text: action.inputText}]
            } 
        case "change status" :
            return {
                ...state,
                todos: state.todos.map((item, i) => i === action.index ? {status: item.status === false ? true : false, text : item.text} : item)
            } 
        case "delete element" :
            return {
                ...state,
                todos: state.todos.filter((item, i) => i !== action.index)
            } 
        case "clear completed" :
            return {
                ...state,
                todos: state.todos.filter(item => item.status !== true)
            } 
        default:
            return {
                ...state,
                todos: []
            } 
    }
}

export default store;