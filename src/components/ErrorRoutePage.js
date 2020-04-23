import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../images/MortySad.gif'

const ErrorMessagePage = (props) => {
    
    return (
        <div className='errorSearch_container'>
              <span className='errorSearchMessage'>No hay resultados</span>
              <img src={errorImg} alt='Sad Morty'></img> 
              <Link to="/">
                 <button>Volver</button>
             </Link>
            </div>
    );
};

export default ErrorMessagePage;
