import React from 'react';
import './App.css';
import axios from 'axios'
import Cards from './Components/Cards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'hillan1152',
      followers: []
    }
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = e => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res =>{
        console.log(res);
        this.setState({
        username: res.data.username
      })
    })
    .catch(err => console.log(err));
  }
  
  fetchFollowers = e => {
    axios 
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err));
  }

    render() {
    return (
      <div className="App">
        <h2>Github Card</h2>
        <div>
          {this.state.followers.map(user => (
            <Cards />
          ))}

        </div>
        
        
        
        {/* <Cards/> */}
      </div>
    );
  }
}

export default App;
