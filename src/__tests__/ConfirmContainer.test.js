import React from 'react';
import { shallow } from 'enzyme';
import ConfirmContainer from '../containers/ConfirmContainer';


describe("<ConfirmContainer />", () => {
  it("renders without crashing", () => {
    shallow(<ConfirmContainer />);
  });

});
