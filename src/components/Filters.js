import React from 'react';

const Filter = (props) => {
    
    const updateInputValue = (event) => { 
        event.preventDefault();
        props.handleInputValue(event.currentTarget.value)
    }

    const handleCheckboxValue = (event) => {
        let checkboxName = event.currentTarget.name
        props.handleCheckboxValue(checkboxName)
    }

    return (
        <div className='filterContainer'>
            <form>
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