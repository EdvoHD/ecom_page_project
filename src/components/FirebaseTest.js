import React, {Component} from "react";
import firebase from "./FirebaseConfig";


class FirebaseTest extends Component {

    onClickFirebase() {
        // Hämtar ifrån databas går in i firestore, sen i table "booking" sen info innanför booking
        const db = firebase.firestore();
        const docRef = db.collection("Booking").doc("info");
        const docRef2 = db.collection("Booking").doc("info2");

        // Hämta sen använd
        // Läser data ifrån firebase
        docRef.get().then(Booking=> {
            if (Booking.exists) {
                console.log("doc exists", Booking.data() ) 
            } else {
                console.log("Nothing here.."); 
            }
        })

        // Skriva in data i firebase 
        docRef.set({
            item: "test item",
            price: 2000
        })
        docRef2.set({
            item: "test 22",
            price: 999
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.onClickFirebase.bind(this)} >Hämta firestore info</button>
            </div>
        )
    }
}

export default FirebaseTest;