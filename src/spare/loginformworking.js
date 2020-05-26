import React, { Component } from 'react'
import {connect} from 'react-redux'
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
    return (
        <div>
             <div>
                 <h1>Hello</h1>
                
                 {/* {data.map(home => <div>{home.firstName}</div>)} */}
            <form onSubmit={this.handleSubmit}>
            <h2>Staff Id : </h2>
            <input type="text" name="staffId" value={this.state.staffId} onChange={this.handleChange} ></input>
            <h2>Password : </h2>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>
            <button type="submit">Login</button>
            </form>
    <span>{this.props.msg? this.props.msg:this.props.fail}</span>
   
        </div>
        </div>
    )
}
}

const mapStateToProps = state=>{
    return{
        // user:state.user,
        msg:state.user,
        fail:state.error
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: (data)=> dispatch(fetchUsers(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);

  
