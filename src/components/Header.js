import React from 'react';
import logo from '../images/RM_logo.png';
import audio from '../audio/ThemeSong.mp3';
import { Link } from 'react-router-dom';
import Theme from './Theme';

const Header = (props) => {

    const ChangeThemes = () => {
        props.ChangeTheme();
    }

    return (
        <header>
            <Link to="/">
                <img className='webLogo' src={logo} alt='Rick and Morty Logo' title='Rick and Morty Logo' />
            </Link>
            <div key="1" className="song">
                <audio controls autoPlay>
                    <source src={audio} type="audio/mp3" />
                </audio>
            </div>
            <Theme ChangeTheme={ChangeThemes}/>
        </header>
    );
};

export default Header;