import React from 'react';
import apiData from '../api/data.json';
import '../stylesheets/App.css';
import ClubList from './ClubList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: apiData
    };
  }
  render() {
    return (
      <div className="App">
        <ClubList clubs={this.state.clubs} />
      </div>
    );
  }
}
export default App;

