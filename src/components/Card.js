import React, {Component} from "react";
import "../style/scss/main.scss";
import {Link} from 'react-router-dom';

import firebase from './FirebaseConfig';



class Card extends Component {

    onClickSaveToFirestore() {
        let db = firebase.firestore();

        let test = db.collection("Booking").doc(this.props.id.toString()); // id ifrån Card's props i app.js Krävs att vara i string format. Kan ej vara key för den är reserved

        test.set({
            name: this.props.title,
            description: this.props.description,
            price: this.props.price,
        })

        test.get()
        .then( Booking=> console.log(Booking.data()))
    }

    render() {
    return (

            <div className="product_card_wrapper">
                <div className={"product_card_container"}>
                    <Link to ="/Form">
                        <div className={"product_image_container"}>
                            <img src={"http://localhost:1337" + this.props.image[0].formats.small.url} className={"card_image"} alt={"404 not found"}/>
                        </div>
                        <div className={"product_info_container"}>
                            <div className={"product_info_title"}>
                                {this.props.title}
                            </div>
                            <div className={"product_info_desc"}>
                                {this.props.description}
                            </div>
                            <div className={"product_info_pricetag"}>
                                {this.props.price} SEK
                            </div>
                            <div className={"product_info_button_container"}>
                                <button className={"card_btn"} onClick={this.onClickSaveToFirestore.bind(this)} >Boka</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Card;


