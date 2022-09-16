// ВОЗМОЖНО НУЖНО ОБЪЕКТОМ

// const actions = {
//     authorization: (name, email) => {
//         return {type: "user authorization", name, email} 
//     } 
// }

// export default actions; 

export const authorization = (name, email) => {
        return {type: "user authorization", name, email}; 
    } 

export const logout = {type: "user log out"};

export const addTodo = (inputText) => {
    return {type: "add todo", inputText}; 
} 

export const changeStatus = (index) => {
    return {type: "change status", index}; 
} 

export const deleteEl = (index) => {
    return {type: "delete element", index}; 
} 

export const clearCompleted = {type: "clear completed"};

export const clearAll = {type: "clear all"};