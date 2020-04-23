import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  const { name, image, species, gender, origin, episode, status} = props.character;
  
  return (
    <React.Fragment>
    <div className="character_detail_container">
      <img src={image} alt={name}/>
      <p className='characterName'>{name}</p>
      <div>
        <p>GENER: {gender}</p>
        <p>ORIGIN: {origin.name}</p>
        <p>EPISODES: {episode.length}</p>
      </div>
      <div className='extrasContainer'>
        <icon>  </icon> 
        <p className='species'> SPECIE {species}</p>
        <p className='status'> STATUS {status}</p>
      </div>
    </div>
      <Link to="/">
      <p>Volver</p>
      </Link>
    </React.Fragment>
  )
}

export default CharacterDetails;

// En la pantalla de detalle aparecerá además de la foto, nombre y especie,
//  planeta de origen, el número de episodios en los que
// aparece y si está vivo o muerto