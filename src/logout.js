import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 import {logoutUser} from './login/loginActions'
 class Logout extends Component {
     constructor(props){
         super(props)

     }
     componentWillMount(){
         this.props.logoutUser()
     }
     
     
    render() {
        return (
            <div>
               
                <Link to="/login">Login Again</Link>
            </div>
            
        )
    }

}
const mapStateToProps = state=>{
    return{
        // user:state.user,
        msg:state.user,
        fail:state.error,
        isLogged:state.isLogged,
        Token:state.token
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        logoutUser: ()=> dispatch(logoutUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)