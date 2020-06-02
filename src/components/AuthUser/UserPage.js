import React, { Component } from "react";
import firebase from '../FirebaseConfig';
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";


class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        displayName: "",
        
    }

 //const enfunction = ()=> { }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");
        return (
            <div>
                {!loggedIn ?
                    <UserLogin userCredential={(user) => { // om du inte är inloggad så visas UserLogin component, om inloggad visas UserProfile
                        this.setState({ user: user.email })
                        this.setState({ displayName: user.displayName })
                        localStorage.setItem("user", this.state.user)
                    }}
                        showDisplayName = { (username) => {
                            firebase.auth().onAuthStateChanged((user)=> {
                                user.updateProfile({
                                    displayName: username
                                }).then( ()=> {
                                    this.setState({
                                        displayName: user.displayName
                                    })
                                    console.log("Your set username:", this.state.displayName);
                                    
                                })
                            })
                        } }
                     /> :
                    <UserProfile userData={this.state.displayName} />
                }
            </div>
        )
    }
}

export default UserPage; 