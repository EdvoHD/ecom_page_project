import React, { Component } from "react";
import axios from "axios";

class Adminform extends Component{

    state = {
        image:" "
    }

    eventChange(e){
        console.log(e.target.files[0])
        this.setState({image:e.target.files[0]})
    }

    async onSubmitToDbase(e){
        e.preventDefault();

        
        const res = await axios.post("http://localhost:1337/produkts", {

            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            
        })

        console.log(res)

        const data = new FormData();
        data.append('files', this.state.image) 
        data.append('ref', 'produkt') 
        data.append('refId', res.data.id)  
        data.append('field', 'image')

        const resPic = await axios.post("http://localhost:1337/upload", data)
        console.log(resPic)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitToDbase.bind(this)}>
                    <input type="text" name="title" placeholder="Produkttitel"/><br/>
                    <textarea type="text" name="description" rows="10" cols="25" placeholder="Beskrivning"></textarea><br/>
                    <input type="number" name="price" placeholder="Pris"/><br/>
                    <input type="file" onChange={this.eventChange.bind(this)} name="file"/><br/>                    
                    <button>Spara</button>
                </form>
            </div>
        )
    }
}

export default Adminform