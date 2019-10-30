import React from 'react';
import axios from 'axios';
import './App.css';
import GitHubCardList from './components/GitHubCardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        user: 'dustinmyers',
        followersList: [],
    }
  }

  handleChanges = event => {
    this.setState({
      user: event.target.value
    });
    console.log(this.state.user);
  };

  fetchFollowers = () => {
    axios
        .get('https://api.github.com/users/' + this.state.user + '/followers')
        .then(response => {
        console.log(response.data);
        this.setState({ followersList: response.data });
        })
        .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    // always write inside conditionals
    if (prevState.user !== this.state.user) {
      this.fetchFollowers();
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Who's github followers would you like to see?</h2>
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleChanges}
        />
        <GitHubCardList user={this.state.user} followersList={this.state.followersList} />
      </div>
    );
  }
}

export default App;
