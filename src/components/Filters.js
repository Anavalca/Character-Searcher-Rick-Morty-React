import React from 'react';

const Filter = (props) => {
    
    const updateInputValue = (event) => { 
        event.preventDefault();
        props.handleInputValue(event.currentTarget.value)
    }

    return (
        <form>
            <input type="text" placeholder='Search character' value={props.value} onChange={updateInputValue} />
        </form>
    );
};

export default Filter;