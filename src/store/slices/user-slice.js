export default function userReducer(state = null, action) {
    switch (action.type) {
        case "user authorization" :
            return {
                name: action.name,
                email: action.email
            }  
        case "user log out" :
            return null;
        default :
            return state || null;
    }
}
        
export const initialUserState = null;