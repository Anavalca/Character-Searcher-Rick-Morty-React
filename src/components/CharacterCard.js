import React from 'react';

const CharacterCard = (props) => {
  const {img, name, species} = props;
  return (
    <div className='character_Card'>
        <div className='character_photo_container'>
         <img src={img} alt={name}/>
        </div>
      <p className='characterName'>{name}</p>
      <p className={`characterSpecie ${species === 'Alien' ? 'alienColor' : 'humanColor'}`}>{species}</p>
    </div>
  )
}

export default CharacterCard;