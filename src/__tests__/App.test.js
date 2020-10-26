import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Home from '../components/Home';
import EstimateContainer from '../containers/EstimateContainer';

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders Home if home state is true", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ home: true })
    expect(wrapper.find(Home).length).toBe(1);
  });

  it("renders EstimateContainer if home state is false", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ home: false })
    expect(wrapper.find(EstimateContainer).length).toBe(1);
  });
});
