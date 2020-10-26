import React from 'react';
import { shallow } from 'enzyme';
import DetailsContainer from '../containers/DetailsContainer';


describe("<DetailsContainer />", () => {
  it("renders without crashing", () => {
    shallow(<DetailsContainer />);
  });

});
