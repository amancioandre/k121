import React, { Component } from 'react';

/* CSS Files */


/* Components */
import Field from "../../Components/Form/Fields";

export default class Secret extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends : [{ name: '', email: ''}],
      submiting: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.clearFriends = this.clearFriends.bind(this);
  }

  handleChange(e) {
    const { value, className, dataset: { id }, name } = e.target;

    if (["name", "email"].includes(className)) {
      let friends = [...this.state.friends];
      friends[id][className] = value;
      this.setState({ friends });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    /* Axios Stuff */
  }

  addFriend() {
    this.setState((prevState) => ({
      friends: [...prevState.friends, { name: '', email: '' }]
    }));
  }
  
  removeFriend(idx) {
    this.setState((prevState) => {
      const friends = [...prevState.friends];
      friends.slice(idx, 1);
      return { friends }
    })
  }

  clearFriends() {
    this.setState({ friends: [{ name: '', email: ''}]} );
  }

  render() {

    return (
      <div>
        <form>
          <div>
            <label htmlFor="event-name">Event Name</label>
            <input id="event-name" type="text" />
          </div>
          <div>
            <label htmlFor="event-date">Event Date</label>
            <input id="event-date" type="date" />
          </div>
          <Field friends={this.state.friends} />
          <input type="submit" value="Shuffle my Friends!" />
        </form>
        <button onClick={this.addFriend}>Add Friend</button>
        <button onClick={this.clearFriends}>Clear Friends List</button>
      </div>
    )
  }
}
