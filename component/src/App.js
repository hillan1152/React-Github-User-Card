import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'hillan1152',
      name: [],
      bio: [],
      followers: []
    }
  }

  fetchUser = e => {
    console.log(e);
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res =>{
        this.setState({
        username: res.data.username
      })
    })
  }
  
  fetchFollowers = e => {
    e.preventDefault();
    axios 
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        this.setState({
          followers: res.data.followers
        })
      })
  }

    render() {
    return (
      <div className="App">
        <h2>Github adsfCard</h2>
        {/* Insert Card Component Here*/}
      </div>
    );
  }
}

export default App;
