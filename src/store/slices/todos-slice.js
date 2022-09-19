export default function todosReducer(state = [], action) {
    switch (action.type) {
        case "add todo" :
            return [...state, {status: false, text: action.inputText, description: action.description, openDescription: false}];
            case "change status" :
            return state.map((item, i) => i === action.index ? {status: item.status === false ? true : false, text: item.text, description: item.description, openDescription: false} : item);
        case "change description" :
            return state.map((item, i) => i === action.index ? {status: item.status, text: item.text, description: action.description, openDescription: item.openDescription} : item);
            case "delete element" :
            return state.filter((item, i) => i !== action.index);
        case "clear completed" :
            return state.filter(item => item.status !== true);
        default:
            return state = [];
    }
}

export const initialTodosState = [];