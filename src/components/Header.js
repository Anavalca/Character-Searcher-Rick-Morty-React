import React from 'react';
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
                <img className='webLogo' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty Logo' title='Rick and Morty Logo' />
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