import React from "react";
import "../style/scss/main.scss";
import {Link} from 'react-router-dom'

const Card =(props)=> {
    

return (

        <div className="product_card_wrapper">
            <div className={"product_card_container"}>
                <Link to ="/Form">
                    <div className={"product_image_container"}>
                        <img src={"http://localhost:1337" + props.image[0].formats.small.url} className={"card_image"} alt={"404 not found"}/>
                    </div>

                    <div className={"product_info_container"}>
                        <div className={"product_info_title"}>
                            {props.title}
                        </div>
                        <div className={"product_info_desc"}>
                            {props.description}
                        </div>
                        <div className={"product_info_pricetag"}>
                            {props.price} SEK
                        </div>
                        <div className={"product_info_button_container"}>
                            <button className={"card_btn"}>Boka</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Card;


