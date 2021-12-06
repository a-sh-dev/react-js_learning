import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  // Check for the presence of the Display component
  it('should render the Display component', () => {
    const calcInitialState = {
      displayValue: '0',
      numbers: [],
      operators: [],
      selectedOperator: '',
      storedValue: '',
    };

    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });
});
