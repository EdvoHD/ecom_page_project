import React, {Component} from 'react';
import firebase from "./FirebaseConfig";


class Contact extends Component {

    onSubmitForm(e) {
        e.preventDefault();
        // firebase.firestore()

        const db = firebase.firestore();
            //userId ska komma från currentUser som finns inuti
            //firebase.auth().currentUser
        
        const docRef = db.collection("contactFormData").doc("userId");

        docRef.set({
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            message: e.target.elements.textarea.value,
        })


    }


    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" name="name" placeholder="Name.." />
                    <input type="email" name="email" placeholder="Email.." />
                    <textarea name="textarea"  placeholder="Subject.." />
                    <button>Send to us</button>
                </form>

                <div>Thank you for your message!</div>
            </div>


        
        )
    }
}

export default Contact;