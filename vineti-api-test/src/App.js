import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const result = await fetch('http://localhost:3000/users');
    this.setState({users: await result.json()});
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <h1>Users</h1>
          {users.map(user => (
            <div>
              <h3>name: {user.name}</h3>
              <p>email: {user.email}</p>
              {user.posts.map(post => (
                <div>
                  <h4>title: {post.title}</h4>
                  <p>body: {post.body}</p>
                </div>
              ))}
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
