import React from 'react';


function SearchBox(props) {

    return(       
            <input type='search'
            className='search'
            placeholder={props.placeholder}
            value={props.searchField}
            onChange={props.handleChange}
            />
        
    )
}
export default SearchBox;