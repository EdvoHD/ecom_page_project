// register / login 
// conditional rendering
// state 
// npm i react-firebaseui

import React, {Component} from "react";
import firebase from "../FirebaseConfig";
// npm i react-firebaseui
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import UserProfile from "./UserProfile";


class UserLogin extends Component {

//props
 state= {
     condition:true, 
     user:""
 }

  uiConfig = {
      // popup istället för redirect
    signInFlow: 'popup',
    // Vilken redirect efter signin (popup är för login formuläret)
    signInSuccessUrl: '/userprofile',
    // Olika 3rd-party login providers 
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
 };

 componentDidMount(){
    
    firebase.auth().onAuthStateChanged((user)=>{
     if(user){  this.setState({user:user.email}) //user:user
       console.log(user);
    }else{
        console.log(this.state.user);
    }
    })
    //skicka data till parent
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
    .then(res=> 

        // anropa showDisplayName
        this.props.userCredential(res.user.email)
        
        ) // res och därifrån i console kan du kolla vilken data du vill catcha user.email displayar email (duh!)

}

 onSubmitRegister(e){

     e.preventDefault();
     let email = e.target.elements.email.value;
     let password = e.target.elements.password.value;
     let displayName = e.target.elements.username.value;

     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then( (res)=> {
         console.log(res);

         // ifrån child till parent med hjälp av callback function
         res.user.sendEmailVerification()
         this.props.userCredential(res.user.email);
         this.props.showDisplayName(displayName); 
        // console.log( "Display name:" ,displayName);
     })
   
 }

 resetPassword(e) {
     e.preventDefault();
     var auth = firebase.auth();
     var emailAddress = e.target.elements.resetEmail.value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    console.log("email sent!");
    
    })
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

                    <form onSubmit={this.resetPassword.bind(this)}>
                        <div>
                            <input type="email" name="resetEmail" placeholder="your email.." />
                            <span>Forgot your password?</span> <button>Reset here!</button>
                        </div>
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

                <div className={"social_register"}>
                    <p>Please sign in:</p>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                </div>

                {this.state.user ? <UserProfile userData={this.state.user} /> : <div> </div> }  
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