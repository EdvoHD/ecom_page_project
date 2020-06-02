import React, { Component } from 'react';
import Card from './Card';
import axios from "axios";


class App extends Component{

    state={
        produkts: []
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    async componentDidMount(){
        axios.get("http://localhost:1337/produkts").then(res => {
            console.log(res.data);
            this.setState({produkts:res.data})
        })
    }
    render(){
        return(
            <div className={"card_main_container"}>  
                    {this.state.produkts.map((produkt) =>
                        <Card key={produkt.id} 
                        id={produkt.id}
                        image={produkt.image}
                        title={produkt.title}
                        price={produkt.price}
                        description={produkt.description}
                        /> 
                       
                    )} 
                                
            </div>
        )
    }
}

export default App

