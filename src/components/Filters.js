import React from 'react';

const Filter = (props) => {
    
    const updateInputValue = (event) => { 
        props.handleInputValue(event.currentTarget.value)
    }

    const handleCheckboxValue = (event) => {
        let checkboxName = event.currentTarget.name
        props.handleCheckboxValue(checkboxName)
    }

    const preventEvent = (event) => {
        event.preventDefault(event);
    }

    return (
        <div className='filterContainer'>
            <form onSubmit={preventEvent}>
                <input type="text" placeholder='Search character' value={props.value} onChange={updateInputValue} />
            </form>
            <div className='checkboxContainer'>
                <label className='characterSpecie humanColor' htmlFor='specieHuman'>HUMAN</label>
                <input onChange={handleCheckboxValue} 
                    name='Human'
                    type="checkbox" 
                    checked={props.ischeckedHuman}/>
                <label className='characterSpecie alienColor'htmlFor='specieAlien'>ALIEN</label>
                <input onChange={handleCheckboxValue} 
                    name='Alien'
                    type="checkbox" 
                    checked={props.ischeckedAlien}/>
            </div>
        </div>
    );
};

export default Filter;