import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = { username: '', city: '', state: '', country: '' };
    this.userUpdate = this.userUpdate.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
  }

  userUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  userSubmit(event) {
    event.preventDefault();
    const { username, city, state, country } = this.state;

    // Create a data object with the form values
    const formData = { username, city, state, country };

    // Make a POST request using Axios
    axios.post('http://127.0.0.1:8000/user-profiles/', formData)
      .then(response => {
        alert('Successfully submitted');
        // You can perform further actions after successful submission
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error scenarios
      });
  }

  render() {
    let { username, city, state, country } = this.state;
    return (
      <div>
        <form onSubmit={this.userSubmit}>
          Username:<input type="text" name="username" value={username} onChange={this.userUpdate} /> <br />
          City: <input type="text" name="city" value={city} onChange={this.userUpdate} /> <br />
          State: <input type="text" name="state" value={state} onChange={this.userUpdate} /> <br />
          Country: <input type="text" name="country" value={country} onChange={this.userUpdate} /> <br />
          <button type="submit">Submit</button>
        </form>

        <h1>{username}</h1>
        <h1>{city}</h1>
        <h1>{state}</h1>
        <h1>{country}</h1>
      </div>
    );
  }
}
