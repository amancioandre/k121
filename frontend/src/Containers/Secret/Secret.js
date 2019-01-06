import React, { Component } from 'react';
import axios from 'axios';

/* Components */
import Landing from "../../Components/Landing/Landing";
import Event from "../../Components/Form/Event";
import Friends from "../../Components/Form/Friend";
import Backdrop from "../../Components/Backdrop/Backdrop";

/* Material UI */
import { IconButton, Icon } from "@material-ui/core";

import './Secret.css';

export default class Secret extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends : [{ name: '', email: ''}],
      event: { 
        title: '',
        date: '',
        description: ''
      },
      submiting: false,
      step: 0,
      message: ''
    }

    this.service = axios.create({
      baseURL: 'https://shufflemyfriends.herokuapp.com/',
      withCredentials: true
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.clearFriends = this.clearFriends.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  handleChange(e) {
    const { value, className, dataset: { id }, name } = e.target;
    let myClass = className;
    if ( myClass.includes('name') ) {
      myClass = 'name'
    } else if( myClass.includes('email')) {
      myClass = 'email'
    }

    const { event } = this.state

    if (["name", "email"].includes(myClass)) {
      let friends = [...this.state.friends];
      friends[id][myClass] = value;
      this.setState({ friends });
    } else {
      event[name] = value;
      this.setState({ event });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const service = this.service
    this.setState({ submiting: !this.state.submiting })
    /* Manipulating Data for Sending */
    const  { friends, event } = this.state
    /* Axios Post starts Shuffling and Generating  */
    service.post('/', { friends, event })
      .then(response => {
        const { _id } = response.data

        service.get(`/secret/${_id}`)
          .then(secretResponse => {
            const { message } = secretResponse.data
            this.setState({ message })
            setTimeout(() => document.location.reload(true), 5000); 
          })
      })
      .catch(err => this.setState({ message: err }))
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
    this.setState({ friends: [{ name: '', email: ''}]});
  }

  nextStep() {
    let { step } = this.state;
    step >= 3 ? step = 3 : step += 1;
    this.setState({ step });
  }

  prevStep() {
    let { step } = this.state;
    step <= 0 ? step = 0 : step -= 1;
    this.setState({ step });
  }

  render() {
    const { friends, event, submiting, step, message } = this.state;
    let displayStep = '';

    switch(step) {
      case 0: // APP Title and Description, Landing Page per se.
        displayStep = 
          <Landing />; break;
      
      case 1: // Event Form
        displayStep = 
          <div>
            <h2>Tell me about your event.</h2>
            <Event event={event} />
          </div>; break;
      
      case 2: // Friends Form
        displayStep = 
          <div>
            <h2>Let's call some friends!</h2>
            <Friends friends={friends} deleteBtn={this.removeFriend}/>
            Add Friend <IconButton 
              color="secondary"
              onClick={this.addFriend}>
                <Icon>add_circle</Icon>
            </IconButton>
            <IconButton 
              onClick={this.clearFriends}>
                <Icon>cancel</Icon>
            </IconButton> Clear List
          </div>; break;
      case 3: // Send!
        displayStep = 
          <div>
            <h2>Ok, are you ready!?</h2>
            <input className="submitBtn" type="submit" value="Yes! Shuffle my Friends!" />
          </div>; break;
      default:
        displayStep = null; break;
    }

    return (
      <div className="Shuffler">
        { submiting ? <Backdrop message={message} /> : null }
        <form onChange={(e) => this.handleChange(e)} onSubmit={this.handleSubmit}>
          {displayStep}          
        </form>
        <div>
          <IconButton
            id='prevStep'
            size='medium' 
            onClick={this.prevStep} 
            disabled={ step<=0 }>
              <Icon>arrow_back_ios</Icon>
          </IconButton>
          <IconButton
            id='nextStep'
            size='small' 
            onClick={this.nextStep} 
            disabled={ step>=3 }>
              <Icon>arrow_forward_ios</Icon>  
          </IconButton>
        </div>
      </div>
    )
  }
}
