import React from 'react';
import '../stylesheets/App.scss';
import FetchData from '../services/FetchData';
import CharacterList from './CharacterList';
// import { Switch,Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    console.log(this.state.data)
    const {data} = this.state
    return (
      <div className="App">
        <CharacterList data={data}
        
        />
      </div>
    );
  }
}

export default App;
