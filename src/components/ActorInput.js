import React from 'react';

import { connect} from 'react-redux'

import {addActor} from '../actions/addActor'



class ActorInput extends React.Component {
    state = {
        name: '', 
        image: '',
        contactInfo: '',
        cityId: '',
        agencyId: '',
        description: ''
    }

    handleChange = (event) => {   
        this.setState({ [event.target.name]: event.target.value })    
    }

    handleSubmit = (event) => {
        console.log(this.state.image)
        event.preventDefault()
        this.props.addActor(this.state)
        this.setState({ 
            name: '', 
            contactInfo: '',
            cityId: '',
            agencyId: '',
            description: ''  
         })
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Actors Name:</label>
                    <input type="text" placeholder='Name' name="name" value= {this.state.name} onChange={this.handleChange}/><br/>
                    <label>Actors image:</label>
                    <input type="file" placeholder='image'  onChange={this.onImageChange}/><br/>
                    <label>Contact Info:</label>
                    <input type="number" placeholder='phone number'value= {this.state.contactInfo} name="contactInfo" onChange={this.handleChange}/><br/>
                    <label>City ID:</label>
                    <input type="number" placeholder='city id'value= {this.state.cityId} name="cityId" onChange={this.handleChange}/><br />
                    <label>Agency ID:</label>
                    <input type="number" placeholder='Agency Id'value= {this.state.agencyId} name="agencyId" onChange={this.handleChange}/><br/>
                    <label>Description:</label>
                    <input type="text area" placeholder='description' value= {this.state.description} name="description" onChange={this.handleChange}/><br/>  
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, {addActor})(ActorInput)