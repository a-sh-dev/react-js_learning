import React from 'react';
import './Calculator.css';
import Display from '../Display/Display';

const Calculator = () => {
  const calcInitialState = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in numbers <Keys />
    numbers: [],
    // values to be displayed in operator <Keys />
    operators: [],
    // operators selected for calculation
    selectedOperator: '',
    // stored value for math operation
    storedValue: '',
  };

  const [calcState, setCalcState] = React.useState(calcInitialState);

  const callOperator = () => {
    console.log('call operation');
  };

  const setOperator = () => {
    console.log('set operation');
  };

  const updateDisplay = () => {
    console.log('update display');
  };

  return (
    <>
      <div className="calculator-container">
        <Display displayValue={calcState.displayValue} />
      </div>
    </>
  );
};

export default Calculator;
