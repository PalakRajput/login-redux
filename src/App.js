import React from 'react';
// import logo from './logo.svg';
import {useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './actions/index'
import {Provider} from 'react-redux';
import store from './store'
import LoginForm from './loginForm'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Auth from './Auth'
import Logout from './logout'

function App() {
//   const dispatch=useDispatch();
//   const counter=useSelector(state=>state.counter)
//   const isLogged=useSelector(state=>state.isLogged)
//   return (
//     <div className="App">
    
//       <h1>Hello</h1>
//       <button onClick={()=>dispatch(increment(2))}>+</button>
//       <button onClick={()=>{dispatch(decrement())}}>-</button>
//   <h2>Counter : {counter}</h2>
// {isLogged?<h3>Info after login</h3>:''}
  
//     </div>
//   );

return(
  <div className="App">
  <Provider store={store} >

  {/* <LoginForm/> */}
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={LoginForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        {/* <Route path="/signup" component={SignUp}></Route> */}
        <Route path="/logout" component={Logout}></Route>
        <Route path="/auth" component={Auth}></Route>
    </Switch>
    </BrowserRouter>
</Provider >
</div>
)
}

export default App;
