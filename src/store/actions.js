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

export const addTodo = (inputText, description) => {
    return {type: "add todo", inputText, description}; 
} 

export const changeStatus = (index) => {
    return {type: "change status", index}; 
} 

export const changeDescription = (index, description) => ({type: "change description", index, description});

export const deleteEl = (index) => {
    return {type: "delete element", index}; 
} 

export const clearCompleted = {type: "clear completed"};

export const clearAll = {type: "clear all"};