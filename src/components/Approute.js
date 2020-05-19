import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Booking from "./Booking";
import Navbar from "./Navbar";
import Formular from "../pages/Formular";
import Adminform from "./Adminform";
import App from "./App";
import AdminSida from "./AdminSida";
import FirebaseTest from "./FirebaseTest";



const Approute = ()=>{

    return (
        <div>
             
            <BrowserRouter>

                 <Navbar/>

                 <Route path="/" component= {App} exact ></Route>
                 <Route path="/bookings" component= {Booking} exact></Route>
                 <Route path="/form" exact component= {Formular}></Route>
                 <Route path="/admin" exact component= {Adminform}></Route>                
                 <Route path="/adminpage" exact component= {AdminSida}></Route>
                 <Route path="/firebasetest" exact component = {FirebaseTest}></Route>

            </BrowserRouter>
            
              
        </div>
    )
}

export default Approute;