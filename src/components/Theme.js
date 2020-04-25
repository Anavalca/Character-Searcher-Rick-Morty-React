import React from 'react';
import themeIcon from '../images/pickle.gif'
import otherUniverse from '../images/otherUniverse.png'

const Theme = (props) => {

    const ChangeTheme = () => {
        props.ChangeTheme()
    }


    return (
        <div className='themeContainer' onClick={ChangeTheme}>
            <img className='chat' src={otherUniverse} alt='Chat' title='Change theme'></img>
            <img className='pickle' src={themeIcon} alt='Pickle Rick' title='Change theme'></img>
        </div>
    );
};

export default Theme;
