import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () => {
  let wrapper;

  // Initialised wrapper to be accessible to all it blocks of tests
  beforeEach(() => (wrapper = shallow(<App />)));

  // Use snapshots to check if it renders correctly
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  // Check for the presence of the Calculator component in App
  it('should render the Calculator component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
