import { useState } from 'react';
import './formInput.css';

function FormInput(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label>{props.label}</label> */}
      {/* <label>{label}</label> */}
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
        // name={props.name}
        // placeholder={props.placeholder}
        // ref={props.refer}
        // onChange={(e) => props.setUsername(e.target.value)}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
