import React from 'react';
import apiData from '../api/data.json';
import '../stylesheets/App.css';
import ClubList from './ClubList';
import Club from './Club';

// console.log(apiData)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: apiData
    };
  }
  render() {
    return (
      <div>
        <ClubList>
          {this.state.clubs.map((club, index) => {
            return <Club
              key={index}
              club={club}
            // club={
            //   {
            //     name: club.name,
            //     icon: club.fa,
            //     members: club.members
            //   }
            // }
            />
          })}
        </ClubList>
      </div>
    );
  }
}
export default App;

