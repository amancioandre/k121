/* eslint-disable import/first */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* Component */
import Friends from './Friend';

describe('<Friends />: Render correct number of elements based on props', () => {
  const n = Math.floor(Math.random() * 100 + 1);
  const friends = new Array(n);
  friends.fill('');

  const wrapper = shallow(<Friends friends={[...friends]}/>);

  it(`should render ${n} blocks`, () => {
    expect(wrapper.find('.friendField')).toHaveLength(n);
  });
})
