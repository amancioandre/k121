import React, { Component } from 'react';

/* CSS Files */


/* Components */
import Field from "../../Components/Form/Fields";

export default class Secret extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends : [{ name: '', email: ''}],
      event: { 
        title: '',
        date: '',
        time: '',
        giftValue: '',
        description: 'Hey friends, guess what!? ...'
      },
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
    const { event } = this.state

    if (["name", "email"].includes(className)) {
      let friends = [...this.state.friends];
      friends[id][className] = value;
      this.setState({ friends });
    } else {
      event[name] = value;
      this.setState({ event });
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
      friends.splice(idx, 1);
      return { friends }
    })
  }

  clearFriends() {
    this.setState({ friends: [{ name: '', email: ''}]} );
  }

  render() {
    const { friends, event: { title, date, description } } = this.state;

    return (
      <div>
        <form onChange={(e) => this.handleChange(e)}>
          <div>
            <label htmlFor="title">Event Title</label>
            <input 
              id="title" 
              name="title" 
              type="text" 
              value={title}
            />
          </div>
          <div>
            <label htmlFor="date">Event Date</label>
            <input 
              id="date" 
              name="date" 
              type="date" 
              value={date}
            />
          </div>
          <div>
            <label htmlFor="description">Event Description</label>
            <textarea 
              rows="5"
              cols="33"
              id="description" 
              name="description" 
              type="textarea" 
              value={description}
            > Hey Friends, guess what!? ... </textarea>
          </div>
          <Field friends={friends} deleteBtn={this.removeFriend}/>
          <input type="submit" value="Shuffle my Friends!" />
        </form>
        <button onClick={this.addFriend}>Add Friend</button>
        <button onClick={this.clearFriends}>Clear Friends List</button>
      </div>
    )
  }
}
