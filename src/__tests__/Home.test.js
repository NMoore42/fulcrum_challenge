import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import { Button } from 'semantic-ui-react';
import EstimateContainer from '../containers/EstimateContainer';

describe("<Home />", () => {
  it("renders without crashing", () => {
    shallow(<Home />);
  });

});
