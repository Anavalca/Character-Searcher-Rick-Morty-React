import React from 'react';
import '../stylesheets/App.scss';
import FetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Filter from './Filters';
import ErrorRoutePage from './ErrorRoutePage';
import errorImg from '../images/MortySad.gif'
import { Switch,Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.state = {
      data: [],
      value:'',
      isFound: true,

    }
  }

  
  componentDidMount() {

    const searchLocalInfo = JSON.parse(localStorage.getItem('searchData'));
    if (searchLocalInfo !== null) {
      this.setState({
          value: searchLocalInfo      
      });
    }

    FetchData()
    .then(data => {
      this.setState({
        data: data.results
      })    
    })
    
  }

  componentDidUpdate() {
    localStorage.setItem('searchData', JSON.stringify(this.state.value));
  }

  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
    this.foundSearch(inputValue)
  }

  foundSearch(inputValue){
    const characters = this.state.data;
    let found = false;
    for (let character of characters){
      if(character.name.toLowerCase().includes(inputValue.toLowerCase()) || inputValue === ''){
        found = true;
        break;
      } 
    }

    if (found) {
      this.setState({
        isFound: true
      })
    } else {
      this.setState({
        isFound: false
      })
    }
  }

  renderCharacterDetail(props){
    const routeId = props.match.params.id;
    const characters = this.state.data;
    let foundRoute = false;
    let characterFound;
    for (let character of characters){
      if(character.id === parseInt(routeId)){
        foundRoute = true;
        characterFound = character;
        break;
      }   
    }
    if (foundRoute){
      return <CharacterDetails character={characterFound}/>;
    } else {
      return <ErrorRoutePage/>;
    }
  }

  render() {
    const {data , value, isFound} = this.state
    return (
      <div className="App">
         <Switch>
          <Route exact path="/">
            <header>
              <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty Logo'/>
            </header>
            <Filter handleInputValue={this.handleInputValue} value={value} />
            <div className={`errorSearch_container ${isFound === true ? 'hidden' : '' }`}>
              <span className='errorSearchMessage' >There isn't result for this search "{value}"</span>
              <img src={errorImg} alt='Sad Morty'></img> 
            </div>
            <CharacterList data={data}  inputValue={value}/>
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
