import React from 'react';
import { shallow } from 'enzyme';
import EstimateContainer from '../containers/EstimateContainer';


describe("<EstimateContainer />", () => {
  it("renders without crashing", () => {
    shallow(<EstimateContainer />);
  });

});
