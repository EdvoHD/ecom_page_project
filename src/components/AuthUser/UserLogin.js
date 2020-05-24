// register / login 
// conditional rendering
// state 

import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }
 onClickRegister(){
     this.setState({condition:false})
 }

 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){

    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res=> this.props.userCredential(res.user.email)) // res och därifrån i console kan du kolla vilken data du vill catcha user.email displayar email (duh!)

  
}

 onSubmitRegister(e){

     e.preventDefault();
     let email = e.target.elements.email.value;
     let password = e.target.elements.password.value;
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(res=> this.props.userCredential(res.user.email))
   
 }
    render(){
        return(
            <div> 
                {this.state.condition  && 
                <div>
                    <h2>Login</h2>
                    <form onSubmit={this.onSubmitLogin.bind(this)}>
                        <input type="email" name="email" placeholder='email'/>
                        <input type="password" name="password" placeholder='password' />
                        <button>Login</button>
                    </form>
                </div>      
                }

                
           {!this.state.condition &&
           <div>
               <h2>Register</h2>
                <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username" placeholder='username..'/>
                    <input type="email" name="email" placeholder='email..' />
                    <input type="password" name="password" placeholder='password..' />
                    <button>Register</button>
                </form>
            </div>
                
                }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
                <button onClick={this.onClickLogin.bind(this)}>Login</button>
                <button onClick={this.onClickRegister.bind(this)}>Register</button>

            </div> // wrapper 
        )
    }
}

export default UserLogin; 