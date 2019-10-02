import React from 'react';
import './App.css';
import axios from 'axios'
import Cards from './Components/Cards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'hillan1152',
      login: '',
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
        username: res.data.login
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
        <div className="userCards">
            <p>{this.state.username}</p>
            {this.state.followers.map(user => (
              <p>Followers: {user.length}</p>
            ))}
          

        </div>
        
        
        
        {/* <Cards/> */}
      </div>
    );
  }
}

export default App;
