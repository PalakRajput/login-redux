import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE,LOGOUT_USER } from './loginTypes'
import axios from 'axios'

export const fetchUserSuccess=(users,token)=>{
    console.log("from fetch user",localStorage.getItem("Token"))
    return {
        type:FETCH_USER_SUCCESS,
        payload:users,
        token
    }
}

export const fetchUserFailure=(error)=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const logoutUser=()=>{
    return{
        type:LOGOUT_USER
        
    }
}
export const fetchUsers =(data)=>{
    console.log(data)
    return (dispatch)=>{
        
        axios.post('http://localhost:4000/employee/verify',data)
        .then(res=>{
            localStorage.setItem("Token","Yes")
            const users=res.data
            const token=localStorage.getItem("Token")
            console.log(token)
            dispatch(fetchUserSuccess(users,token))
        })
        .catch(err=>{
            const error=err.response.data.message
            dispatch(fetchUserFailure(error))
        })
    //     axios
    //   .get('http://localhost:4000/employee')
    //   .then(response => {
    //     // response.data is the users
    //     const users = response.data
    //     console.log(users)
    //     dispatch(fetchUserSuccess(users))
    //   })
    //   .catch(error => {
    //     // error.message is the error message
    //     dispatch(fetchUserFailure(error.message))
    //   })
    }
}

// export const logoutUser=()=>{
//     return()
// }