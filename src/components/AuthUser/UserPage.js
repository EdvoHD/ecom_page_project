import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";


class UserPage extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        
    }

 //const enfunction = ()=> { }

    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");
        return (
            <div>
                {!loggedIn ?
                    <UserLogin userCredential={(user) => { // om du inte är inloggad så visas UserLogin component, om inloggad visas UserProfile
                        this.setState({ user: user.email })
                        localStorage.setItem("user", this.state.user)
                    }
                    } /> :
                    <UserProfile userData={this.state.user} />
                }
            </div>
        )
    }
}

export default UserPage; 