// testa skapa:  Dashboard
//userProfile  
import React, {Component} from "react";
import firebase from "../FirebaseConfig"

class UserProfile extends Component{
    
    logOut(){
        // Loggar ut användaren som är inloggad
        localStorage.clear();
        firebase.auth().signOut();
        window.location.reload(false);
    }

    deleteAccount() {
        // Hittar currentUser som är inloggad och sen delete 
        const localUser = localStorage.getItem("user");
        console.log(localUser);
        
        var user = firebase.auth().currentUser;
        user.delete().then(function() {
        // User deleted.
        localStorage.removeItem("user");
        })
    }


    render(){
        return(
            <div>
                Profile info {this.props.userData}

                 <button onClick={this.logOut.bind(this)}>Logout</button>
                 <button onClick={this.deleteAccount.bind(this)}>Delete Account</button>
                 
            </div>
        )
    }
}


export default UserProfile;