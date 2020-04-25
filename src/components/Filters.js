import React from 'react';
import PropTypes from 'prop-types';

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

    const { value, ischeckedHuman, ischeckedAlien } = props;
    return (
        <div className='filterContainer'>
            <form onSubmit={preventEvent}>
                <input type="text" placeholder='Search character' value={value} onChange={updateInputValue} />
            </form>
            <div className='checkboxContainer'>
                <label className='characterSpecie humanColor' htmlFor='specieHuman'>HUMAN</label>
                <input onChange={handleCheckboxValue}
                    name='Human'
                    type="checkbox"
                    checked={ischeckedHuman} />
                <label className='characterSpecie alienColor' htmlFor='specieAlien'>ALIEN</label>
                <input onChange={handleCheckboxValue}
                    name='Alien'
                    type="checkbox"
                    checked={ischeckedAlien} />
            </div>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    ischeckedHuman: PropTypes.bool,
    ischeckedAlien: PropTypes.bool,
};

export default Filter;