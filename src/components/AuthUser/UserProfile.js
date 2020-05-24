// testa skapa:  Dashboard
//userProfile  
import React, {Component} from "react";
import firebase from "../FirebaseConfig"

class UserProfile extends Component{
    
    logOut(){
        // Loggar ut användaren som är inloggad
        localStorage.clear();
        firebase.auth().signOut();
    }
    render(){
        return(
            <div>
                Profile info {this.props.userData}

                 <button onClick={this.logOut.bind(this)}> Logout</button>
                 
            </div>
        )
    }
}


export default UserProfile;