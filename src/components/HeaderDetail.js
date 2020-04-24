import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDetail = (props) => {

    return (
        <header>
            <Link to="/">
              <img className='webLogo' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty Logo' title='Rick and Morty Logo'/>
            </Link>
        </header>
    );
};

export default HeaderDetail;