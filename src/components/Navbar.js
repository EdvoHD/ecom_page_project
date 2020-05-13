import React from 'react';
import {Link} from 'react-router-dom'
import "../style/scss/main.scss";

const Navbar = ()=>{

    return(


        <nav>
          <div className="nav_menu">
              <ul className={"menu_list"}>
                <li className={"menu_list_item"}><Link to="/">Home</Link> </li>
                <li className={"menu_list_item"}><Link to="/Card.js">Cards</Link> </li>
                <li className={"menu_list_item"}><Link to="/Booking.js">Booking</Link> </li>
                <li className={"menu_list_item"}><Link to="/Form">Form</Link> </li>
                <li className={"menu_list_item"}><Link to="/adminpage">Admin</Link> </li>
              </ul>
          </div>
          
          <input id={"burger_toggler"} type={"checkbox"}/>

          <div className={"burger_icon_container"}>
            <div className={"burger_icon"}></div>
          </div>

          <div className={"nav_burger_menu"}>
            <ul className={"burger_list"}>
              <li className={"burger_list_item"}><Link to="/">Home</Link> </li>
              <li className={"burger_list_item"}><Link to="/Card.js">Cards</Link> </li>
              <li className={"burger_list_item"}><Link to="/Booking.js">Booking</Link> </li>
              <li className={"burger_list_item"}><Link to="/Form">Form</Link> </li>
              <li className={"burger_list_item"}><Link to="/adminpage">Admin</Link> </li>
            </ul>
          </div>
        </nav>
     
           
      )


}

export default Navbar