import React from 'react';
import { shallow } from 'enzyme';
import ResourcesContainer from '../containers/ResourcesContainer';


describe("<ResourcesContainer />", () => {
  it("renders without crashing", () => {
    shallow(<ResourcesContainer />);
  });

});
