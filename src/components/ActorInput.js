import React from 'react';
import { connect} from 'react-redux'
import {addActor} from '../actions/addActor'
import {fetchCities} from '../actions/fetchCities'
import {fetchAgencies} from '../actions/fetchAgencies'
import { Button, FormGroup, FormLabel, FormControl,  } from 'react-bootstrap'


class ActorInput extends React.Component {

    state = {
        name: '', 
        imageUrl: '',
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
        const formData = new FormData();
      
        formData.append('name', this.state.name);
        formData.append('image_url', this.state.imageUrl); 
        formData.append('contact_info', parseInt(this.state.contactInfo)); // contactInfo is different in input file and in state
        formData.append('city_id', parseInt(this.state.cityId)); // cityId in state and input 
        formData.append('agency_id', parseInt(this.state.agencyId)); // agencyId in state and input 
        formData.append('description', this.state.description);
        for (let [key, value] of formData.entries()) { 
          console.log(key, value);
         }
       
      
        this.props.addActor(formData)
        this.setState({ 
            name: '', 
            imageUrl: '',
            contactInfo: '',
            cityId: '',
            agencyId: '',
            description: ''  
         })
         this.props.history.push('/actors')
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({imageUrl: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

      handleCityId = (event) => { 
          this.setState({ cityId: event.target.value })
      }

      handleAgencyId = (event) => { 
        this.setState({ agencyId: event.target.value })
    }
      cityIdOnClick = () => {
        this.props.fetchCities()
      }

      agencyOnClick = () => { 
        this.props.fetchAgencies()
      }
    render(){
    
        return (
    
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicName">
                    <FormLabel>Actors Name:</FormLabel>
                    <FormControl type="text"  name="name" value= {this.state.name} onChange={this.handleChange}/><br/>
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                    <FormLabel>Actors image:</FormLabel>
                    <FormControl type="file" name="image_url"  multiple="false" onChange={this.onImageChange} accept="image/png, image/jpeg, image/jpg" /><br/>
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                    <FormLabel>Contact Info:</FormLabel>
                    <FormControl type="number" value= {this.state.contactInfo} name="contactInfo" onChange={this.handleChange}/><br/>
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                    <FormLabel>Description:</FormLabel>
                    <FormControl as="textarea" rows="10"  value= {this.state.description} name="description" onChange={this.handleChange}/><br/> 
                    </FormGroup> 
                    <FormGroup controlId="formBasicName">
                    <FormLabel>City:</FormLabel>
                    <select type="number" value= {this.state.cityId} name="cityId" onChange={this.handleCityId} onClick={this.cityIdOnClick}>
                     {this.props.cities.map(city => <option value={city.id}>{city.attributes.name} </option>) }
                    </select>
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                    <FormLabel>Agency:</FormLabel>
                    <select type="number" value= {this.state.agencyId} name="agencyId" onChange={this.handleAgencyId} onClick={this.agencyOnClick}>
                    {this.props.agencies.map(agency => <option value={agency.id}>{agency.attributes.name}-{ agency.attributes.location} </option>) }
                    </select>
                    </FormGroup>
                    <Button type="submit" variant="primary">Submit</Button>
                </form>
            </div>
        )
    }
}
const msp = state => { 
    return { 
        cities: state.cities.cities,
        agencies: state.agencies.agencies
    }
}
export default connect(msp, {addActor, fetchCities, fetchAgencies})(ActorInput)



