import React, { Component } from "react";


import AdminProfile from "./auth/AdminProfile";
import AdminLogin from "./auth/AdminLogin";


class AdminSida extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }

    callback(e, jwt){
        this.setState({ user: e.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }


    render() {

        const loggedIn = this.state.user||localStorage.getItem("jwt");
        return (
            <div>
                {!loggedIn ?
                    <AdminLogin user= {this.state.jwt} userCredential={this.callback.bind(this)} /> :
                    <AdminProfile userData={this.state.user} />
                }
            </div>
        )
    }
}

export default AdminSida;

//Lägg till en logout component 
//Visa den i navbar om användare är inloggat 
//Flytta adminForm i adminProfile