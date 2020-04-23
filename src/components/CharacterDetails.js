import React from 'react';
import alienImg from '../images/alien.png';
import humanImg from '../images/human.png';
import aliveImg from '../images/heart.png';
import deathImg from '../images/death.png';
import unknownImg from '../images/chat.png';
import { Link } from 'react-router-dom';

class CharacterDetails extends React.Component {

  changeStatusImg(){
    if(this.props.character.status === 'Alive'){
      return aliveImg
    } else if (this.props.character.status === 'Dead') {
      return deathImg
    } else {
      return unknownImg
    }
  }

  render() {
    const { name, image, species, gender, origin, episode} = this.props.character;

    return (
      <React.Fragment>
      <div className="character_detail_container">
        <img src={image} alt={name}/>
        <p className='characterName'>{name}</p>
        <div className='dataContainer'>
          <p>GENER: {gender}</p>
          <p>ORIGIN: {origin.name}</p>
          <p>EPISODES: {episode.length}</p>
        </div>
        <div className='extrasContainer'>
          <div className=' container species'>
            <img src={species === 'Human'? humanImg : alienImg} alt='specie'></img>
            <p>SPECIE</p>
          </div>
          <div className='container status'>
            <img src={this.changeStatusImg()} alt='status'></img>
            <p>STATUS</p>
          </div>
        </div>
      </div>
        <Link to="/">
        <p>Back to home</p>
        </Link>
      </React.Fragment>
    )
  }
}

export default CharacterDetails;