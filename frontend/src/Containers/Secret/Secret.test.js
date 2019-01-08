/* eslint-disable import/first */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* Containers and Components */
import  { Secret } from './Secret';
import Landing from '../../Components/Landing/Landing';
import Event from '../../Components/Form/Event';
import Friends from '../../Components/Form/Friend';
import Backdrop from '../../Components/Backdrop/Backdrop';


describe('<Secret />: Renders correct components based on state', () => {
  /* Shallow allows us to render only first level components */
  const wrapper = shallow(<Secret />);

  describe('Render correct components based on step value', () => {
    it('should render <Landing /> if state.step === 0', () => {
      wrapper.setState({ step: 0 }, () => {
        wrapper.update();
        expect(wrapper.contains(<Landing />)).toEqual(true);
      });
    });
  
    it('should render <Event /> if state.step === 1', () => {
      wrapper.setProps(event => null);
      wrapper.setState({ step: 1 }, () => {
        wrapper.update();
        expect(wrapper.containsAnyMatchingElements(
          [<Event />]
        ))
        .toEqual(true);
      });
    });
  
    it('should render <Friends /> if state.step === 2', () => {
      wrapper.setState({ step: 2 }, () => {
        expect(wrapper.containsAnyMatchingElements(
          [<Friends />]
        ))
        .toEqual(true);
      });
    });
  
    it('should render a Submit button with type = "submit" if state.step === 3', () => {
      wrapper.setState({ step: 3 }, () => {
        expect(wrapper.contains(
          <div>
            <h2>Ok, are you ready!?</h2>
            <input className="submitBtn" type="submit" value="Yes! Shuffle my Friends!" />
          </div>
          ))
        .toEqual(true);
      });
    });

    it('should render <Backdrop /> if submitting === true', () => {
      wrapper.setState({ submiting: true }, () => {
        expect(wrapper.containsAnyMatchingElements(
          [<Backdrop />]
        ))
        .toEqual(true);
      });
    });
  });
});

describe('<Secret />: Step Methods must increment/decrement steps by one and caps at 0 and 3', () => {
  let changeStep;
  let step;

  const wrapper = shallow(<Secret />).instance();
  const { nextStep } = wrapper;
  const { prevStep } = wrapper;
  
  it('nextStep() should increment step by 1', () => {
    step = wrapper.state.step;
    nextStep();
    changeStep = wrapper.state.step;
    expect(changeStep - step).toEqual(1);
  });

  it('nextStep() should cap at 3', () => {
    for( let i = 0; i < 100; i += 1) {
      nextStep();
    }
    expect(wrapper.state.step).toEqual(3);
  });

  it('prevStep() should decrement step by 1', () => {
    step = wrapper.state.step;
    prevStep();
    changeStep = wrapper.state.step;
    expect(step - changeStep).toEqual(1);
  });

  it('prevStep() should cap at 0', () => {
    for( let i = 0; i < 100; i += 1) {
      prevStep();
    }
    expect(wrapper.state.step).toEqual(0);
  });
});

describe('<Secret />: Add/Clear methods', () => {

  const wrapper = shallow(<Secret />).instance();
  const { addFriend } = wrapper;
  const { clearFriends } = wrapper;

  const length = Math.floor(Math.random() * 10);
  for ( let i = 1; i < length; i ++) {
    addFriend();
  }

  it('addFriend() should increment friends array by 1', () => {
    expect(wrapper.state.friends.length).toEqual(length);
  });

  it('clearFriends() should leave one empty friend in the friends array', () =>{
    clearFriends();
    expect(wrapper.state.friends.length).toEqual(1);
  })
});

