import React from 'react';
import '../stylesheets/App.scss';
import FetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Filter from './Filters';
import { Switch,Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],

    }
  }

  componentDidMount() {
    FetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
  }

  renderCharacterDetail(props){
    const routeId = props.match.params.id;
    const characters = this.state.data;
    for (let character of characters){
      if(character.id === parseInt(routeId)){
        return <CharacterDetails character={character}/>
      }
    }
  }

  render() {
    const {data} = this.state
    return (
      <div className="App">
         <Switch>
          <Route exact path="/">
            <header>
              <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png' alt='Rick and Morty Logo'/>
            </header>
            <Filter handleInputValue={this.handleInputValue} />
            <CharacterList data={data}/>
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
