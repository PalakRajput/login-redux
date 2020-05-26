
import {  FETCH_USER_SUCCESS, FETCH_USER_FAILURE ,LOGOUT_USER} from './loginTypes'

const initialState={
    loading:false,
    user:'',
    error:'',
   isLogged:false,
   token:localStorage.getItem("Token")
}
console.log("from reducer",localStorage.getItem("Token"))
console.log("from reducer state",initialState.token)

const reducer=(state=initialState,action)=>{
    switch (action.type) {
            
        case FETCH_USER_SUCCESS:
            console.log("from fetch user reducer",localStorage.getItem("Token"))
                return {
                    
                    loading:false,
                    user:action.payload,
                    error:'',
                    isLogged:true,
                    token:action.token
                }
                
                case FETCH_USER_FAILURE:
                    return {
                        
                        loading:false,
                        user:'',
                        error:action.payload,
                        isLogged:false
                    }
                case LOGOUT_USER:
                    localStorage.removeItem("Token")
                    return{
                        isLogged:false
                    }
                    
        default: 
        return state
            
    }
}
export default reducer;