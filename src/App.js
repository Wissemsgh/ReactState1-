import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Johnny Depp',
        bio: 'Artist',
        imgSrc: 'https://resize.elle.fr/square/var/plain_site/storage/images/beaute/news-beaute/parfums/johnny-depp-nouveau-visage-d-un-parfum-dior-2956038/54653840-1-fre-FR/Johnny-Depp-nouveau-visage-d-un-parfum-Dior.jpg',
        profession: 'Actor',
      },
      show: false, 
    };
  }

  render() {
    const { person, show } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, Class-Based Component</h1>
          <button onClick={this.toggleProfile}>
            {show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {show && (
            <div>
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <img src={person.imgSrc} alt={person.fullName} />
              <p>Profession: {person.profession}</p>
            </div>
          )}
        </header>
      </div>
    );
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
}

export default App;


