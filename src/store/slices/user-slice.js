export default function userReducer(state = null, action) {
    switch (action.type) {
        case "user authorization" :
            return {
                name: action.name,
                email: action.email
            }  
        case "user log out" :
            return state = null; // передался глобальный state и обнулился? Тогда почему todos не стал null?
        default :
            return state;
    }
}
        
export const initialUserState = null;