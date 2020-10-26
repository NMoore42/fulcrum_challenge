import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Home from '../components/Home'


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Home component on page load", () => {
  const wrapper = shallow(<App />);
  const home = <Home />;
  expect(wrapper.contains(home)).toEqual(true);
});
