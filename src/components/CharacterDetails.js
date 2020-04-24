import React from 'react';
import Header from './Header';
import alienImg from '../images/alien.png';
import humanImg from '../images/human.png';
import aliveImg from '../images/heart.png';
import deathImg from '../images/death.png';
import unknownImg from '../images/chat.png';
import portalImg from '../images/portal.gif';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {

  const changeStatusImg = () => {
    if(props.character.status === 'Alive'){
      return aliveImg
    } else if (props.character.status === 'Dead') {
      return deathImg
    } else {
      return unknownImg
    }
  }

  const goPrevCharacterDetail = () => {
    if (props.character.id > 1) {
      return `/character/${props.character.id - 1}`
    }   
  } 

  const goNextCharacterDetail = () => {
    if (props.character.id < 20) {
      return `/character/${props.character.id + 1}`
    }  
  } 

    const { name, image, species, gender, origin, episode } = props.character;

    return (
      <React.Fragment>
        <Header/>
        <div className='character_detail_container'>
          <Link to={goPrevCharacterDetail}>
              <button title='Previous character' className='circleButton prevCharacter'><i class="fas fa-chevron-left"></i></button>
          </Link>        
          <div className='character_detail_subcontainer'>
          <div className='dataContainer1'>
            <img src={image} alt={name}/>
            <div className='titleContainer'>
              <p className='nameCharacter'>{name}</p>
              <div className='dataContainer2'>
                <p>GENER: {gender}</p>
                <p>ORIGIN: {origin.name}</p>
                <p>EPISODES: {episode.length}</p>
              </div>
            </div>
          </div>
            <div className='extrasContainer'>
              <div className=' container species'>
                <img src={species === 'Human'? humanImg : alienImg} alt='specie'></img>
                <p>SPECIE</p>
              </div>
              <div className='container status'>
                <img src={changeStatusImg()} alt='status'></img>
                <p>STATUS</p>
              </div>
            </div>
          </div>
          <Link to={goNextCharacterDetail}>
              <button title='Next character' className='circleButton nextCharacter'><i class="fas fa-chevron-right"></i></button>
          </Link> 
        </div>
        <Link to="/">
            <p className='messageGoHome'>Back to home</p>
            <img className='gifGoHome' src={portalImg} alt='Go home page'/>
        </Link>
      </React.Fragment>
    )
}

export default CharacterDetails;