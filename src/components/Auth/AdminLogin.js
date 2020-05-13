  // registrera / login
  // conditional rendering
  // state

import React, { Component } from "react";
import axios from "axios";


class AdminLogin extends Component {

  state={
    loginCondition: true
  }

  onClickRegister(){
    this.setState({loginCondition:false})
  }
  onClickLogin(){
    this.setState({loginCondition:true})
  }

  //REGISTRERINGSFUNKTION
  onSubmitRegister(e){
    e.preventDefault();

      axios
      .post('http://localhost:1337/auth/local/register', {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      
      this.props.userCredential(response.data.user, response.data.jwt)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  }

  //LOGINFUNKTION
  onSubmitLogin(e){
    e.preventDefault();
    
    axios
    .post('http://localhost:1337/auth/local', {
      identifier: e.target.elements.email.value,
      password: e.target.elements.password.value,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      console.log(this.props)
      this.props.userCredential(response.data.user, response.data.jwt)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  }

  render(){
    return(
      <div> 
        {this.state.loginCondition &&
        <form onSubmit={this.onSubmitLogin.bind(this)}>
          <input type="email" name="email" placeholder="Mail"/><br/>
          <input type="password" name="password" placeholder="Lösenord"/><br/>
          <button>Login</button><br/><br/>
          <button onClick={this.onClickRegister.bind(this)}>Registrera</button>
        </form>}


        {!this.state.loginCondition && 
        <form onSubmit={this.onSubmitRegister.bind(this)}>
          <input type="text" name="username" placeholder="Användarnamn"/><br/>
          <input type="email" name="email" placeholder="Mail"/><br/>
          <input type="password" name="password" placeholder="Lösenord"/><br/>
          <button>Registrera</button><br/><br/>
          <button onClick={this.onClickLogin.bind(this)}>Tillbaka</button>
        </form>}

        

      </div>
    )
  }

}

export default AdminLogin;