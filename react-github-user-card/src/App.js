import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
      followers: []
    };
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/etridgely")
      .then(res => this.setState({
        user: res.data
      }))
      .catch(e => console.log(e));
      axios.get("https://api.github.com/users/etridgely/followers")
      .then(res => this.setState({
        followers: res.data
      }))
      .catch(e => console.log(e));
  }

  render() {

    return (
      <div className="App">
        {console.log(this.state.followers)}
        {<UserCard
          key={this.state.user.id}
          imgURL={this.state.user.avatar_url}
          name={this.state.user.login}
          username={this.state.user.login}
          bio={this.state.user.bio}
          profile={this.state.user.blog}
        />}
        {this.state.followers.map(user => {
          return <UserCard
          key={user.id}
          imgURL={user.avatar_url}
          username={user.login}
          profile={user.html_url}
        />
        })}
      </div>
      );
      }
  }

export default App;
