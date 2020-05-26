import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import './login.css'
import {fetchUsers} from './login/loginActions'
 class LoginForm extends Component {
   constructor(props){
       super(props)
           this.state={
               staffId:'',
               password:''
           }                                                           
       
   }
   handleChange=e=>{
       this.setState({[e.target.name]:e.target.value})
   }
// componentDidMount(){
//     console.log("hiiiiiiiiiii")
//     this.props.fetchUsers()
// }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            staffId:this.state.staffId,
            password:this.state.password
        }
        console.log(data)
        this.props.fetchUsers(data)
        
        
    }
render() {
    // let data = Array.from(this.props.user)
    console.log("from login",this.props.Token)
    if(this.props.Token!=null){
        return <Redirect to="/auth"></Redirect>
    }
      {/* {data.map(home => <div>{home.firstName}</div>)} */}
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <div className="container">
            <div className="card" >
                <br/><br/>
                <h3 style={{textAlign:"center"}}>Login</h3>
               <form onSubmit={this.handleSubmit} style={{width:"300px", margin:" auto"}}>
               <div className="imgcontainer">
                    <img src="avatarimage.jpg" alt="Avatar" className="avatar img-rounded"/>
                </div>
                <div className="form-group">
                       <input type="text" className="form-control" name="staffId"
                       placeholder="Enter Name" value={this.state.staffId}
                        onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                       <input type="password" className="form-control" name="password"
                       placeholder="Enter Password" value={this.state.password} 
                       onChange={this.handleChange}></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                    <br/><br/>
                    
                    {/* Not Yet Registered ? Click Here<Link to='/signup'>SignUp</Link> */}
                </form>
                <br/><br/>
                {/* <span className="text-success"><b>{this.props.msg}</b></span> */}
    <span>{this.props.msg?null:<span className="text-danger"><b>{this.props.fail}</b></span>}</span> 
        </div>
        </div>
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
        fetchUsers: (data)=> dispatch(fetchUsers(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);

  
