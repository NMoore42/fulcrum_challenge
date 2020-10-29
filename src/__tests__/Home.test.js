import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';


jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("<Home />", () => {
  it("renders without crashing", () => {
    shallow(<Home />);
  });

});
