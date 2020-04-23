import React from 'react';
import CharacterCard from './CharacterCard'
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

  return (
    <ul className="character_List">
      {props.data
        .sort((characterA, characterB) => {
          if (characterA.name < characterB.name) return -1;
          else if (characterA.name > characterB.name) return 1;
          return 0;
        })
        .filter(character => props.inputValue === '' || character.name.toLowerCase().includes(props.inputValue.toLowerCase()))
        .map(character => 
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              <CharacterCard
                img={character.image}
                name={character.name}
                species={character.species}
              />
            </Link>
          </li>
        )}
    </ul>
  )
}

 export default CharacterList;