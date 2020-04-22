import React from 'react';

const CharacterDetails = (props) => {
    console.log(props)
const { name, image, gender} = props.character;
  return (
    <div className="character_detail_container">
      <img src={image} alt={name}/>
      <p>{gender}</p>
    </div>
  )
}

export default CharacterDetails;