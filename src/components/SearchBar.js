import React from 'react'


class SearchBar extends React.Component {
    render(){
        return (
            <div>
                   <input  type="text" placeholder="Search An Actor" name="search" value={this.props.search}  onChange={this.props.handleSearchChange}  /> 
            </div>
        )
    }
}

export default SearchBar 