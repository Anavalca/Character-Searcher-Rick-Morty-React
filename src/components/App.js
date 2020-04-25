import React from 'react';
import '../stylesheets/App.scss';
import FetchData from '../services/FetchData';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Filter from './Filters';
import ErrorRoutePage from './ErrorRoutePage';
import errorImg from '../images/MortySad.gif'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleCheckboxValue = this.handleCheckboxValue.bind(this);
    this.state = {
      data: [],
      value: '',
      isFound: true,
      ischeckedHuman: false,
      ischeckedAlien: false,
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

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
    this.foundSearch(inputValue)
  }

  handleCheckboxValue(checkboxName) {
    if (checkboxName === 'Human') {
      this.setState(prevState => {
        return {
          ischeckedHuman: !prevState.ischeckedHuman
        }
      })
    } else if (checkboxName === 'Alien') {
      this.setState(prevState => {
        return {
          ischeckedAlien: !prevState.ischeckedAlien
        }
      })
    }
  }

  foundSearch(inputValue) {
    const characters = this.state.data;
    let found = false;
    for (let character of characters) {
      if (character.name.toLowerCase().includes(inputValue.toLowerCase()) || inputValue === '') {
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

  renderCharacterDetail(props) {
    const routeId = props.match.params.id;
    const characters = this.state.data;
    let foundRoute = false;
    let characterFound;
    for (let character of characters) {
      if (character.id === parseInt(routeId)) {
        foundRoute = true;
        characterFound = character;
        break;
      }
    }
    if (foundRoute) {
      return <CharacterDetails character={characterFound} />;
    } else {
      return <ErrorRoutePage />;
    }
  }

  render() {
    const { data, value, isFound, ischeckedAlien, ischeckedHuman } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filter handleInputValue={this.handleInputValue} value={value} handleCheckboxValue={this.handleCheckboxValue} ischeckedHuman={ischeckedHuman} ischeckedAlien={ischeckedAlien} />
            <div className={`errorSearch_container ${isFound === true ? 'hidden' : ''}`}>
              <span className='errorSearchMessage' >There isn't any result for this search: "{value}"</span>
              <img src={errorImg} alt='Sad Morty' title='Sad Morty' />
            </div>
            <CharacterList data={data} inputValue={value} ischeckedHuman={ischeckedHuman} ischeckedAlien={ischeckedAlien} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
