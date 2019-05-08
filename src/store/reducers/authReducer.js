const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {

    switch(action.type){

        // LOGIN AUTH
        // LOGIN AUTH
        // LOGIN AUTH

        case 'LOGIN_ERROR':
            console.log("Login Failed...");
            return {
                ...state,
                authError: 'login failed'
            }
            
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }

        // LOGOUT AUTH
        // LOGOUT AUTH
        // LOGOUT AUTH

        case 'SIGNOUT_ERROR':
            console.log("SIGNOUT_ERROR...");
            return {
                ...state,
            }
            
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
            }

        // SIGNUP AUTH
        // SIGNUP AUTH
        // SIGNUP AUTH

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        
        case 'SIGNUP_ERROR':
            console.log("Sign up Error!!!");
            return {
                ...state,
                authError: action.err.message
            }
            
        
            
        default:
            return state
    }

}


export default authReducer