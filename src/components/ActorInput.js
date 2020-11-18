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
        event.preventDefault()
        this.props.addActor(this.state)
        this.setState({ 
            name: '', 
            image: '',
            contactInfo: '',
            cityId: '',
            agencyId: '',
            description: ''  
         })
    }

    render(){
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Actors Name:</label>
                    <input type="text" placeholder='Name' name="name" value= {this.state.name} onChange={this.handleChange}/><br/>
                    <label>Actors image:</label>
                    <input type="text" placeholder='image' value= {this.state.image} name="image" onChange={this.handleChange}/><br/>
                    <label>Contact Info:</label>
                    <input type="number" placeholder='phone number'value= {this.state.contact_info} name="contact_info" onChange={this.handleChange}/><br/>
                    <label>City ID:</label>
                    <input type="number" placeholder='city id'value= {this.state.city_id} name="city_id" onChange={this.handleChange}/><br />
                    <label>Agency ID:</label>
                    <input type="number" placeholder='Agency Id'value= {this.state.agency_id} name="agency_id" onChange={this.handleChange}/><br/>
                    <label>Description:</label>
                    <input type="text area" placeholder='description' value= {this.state.description} name="description" onChange={this.handleChange}/><br/>  
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, {addActor})(ActorInput)