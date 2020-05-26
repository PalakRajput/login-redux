import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect,Link } from 'react-router-dom'

 class Auth extends Component {
    render() {
        console.log("from auth",this.props.Token)
        if(this.props.Token==null){
            return <Redirect to='/'></Redirect>
        }
        return (
            <div style={{backgroundColor:"lightblue"}}>
            <div className="container">
                <h1>You are redirected here after Login.</h1>
                <Link to="/logout">Logout</Link>
            </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        // user:state.user,
        // msg:state.user,
        // fail:state.error,
        isLogged:state.isLogged,
        Token:state.token
    }
}
export default connect(mapStateToProps)(Auth)
