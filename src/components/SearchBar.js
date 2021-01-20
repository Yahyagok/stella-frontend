import React from 'react'

import {  NavLink  } from "react-bootstrap"




class SearchBar extends React.Component {
    render(){
        return (
            <div>
                 <NavLink><input   type="text" placeholder="Search An Actor" name="search" value={this.props.search}  onChange={this.props.handleSearchChange}  /> </NavLink>
            </div>
        )
    }
}

export default SearchBar 


