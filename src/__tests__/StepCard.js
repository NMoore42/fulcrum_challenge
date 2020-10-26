import React from 'react';
import { shallow } from 'enzyme';
import StepCard from '../components/StepCard';
import {useHistory} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

describe("<StepCard />", () => {
  it("renders without crashing", () => {
    const step = {name: "details", icon: "clipboard", title: "Details", state: {}};
    shallow(<StepCard step={step}/>);
  });

});
