import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/user-profiles/')  // Adjust the URL to your API endpoint
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Your Data:</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Username:</strong></td>
                    <td>{item.username}</td>
                  </tr>
                  <tr>
                    <td><strong>City:</strong></td>
                    <td>{item.city}</td>
                  </tr>
                  <tr>
                    <td><strong>State:</strong></td>
                    <td>{item.state}</td>
                  </tr>
                  <tr>
                    <td><strong>Country:</strong></td>
                    <td>{item.country}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserProfile;
