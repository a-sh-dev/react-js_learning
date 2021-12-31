import styled, { css } from 'styled-components';

// Add variants
const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 1.8rem 2.8rem;
      border-radius: 0.8rem;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 0.85rem 1.5rem;
      border-radius: 5px;
      font-size: 1em;
    `;
  }
};

export const Button = styled.button`
  color: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.primaryDarkColor};
  background: ${(props) =>
    props.secondary ? props.theme.primaryDarkColor : props.theme.primaryColor};
  font-weight: bold;
  border: none;
  display: block;
  white-space: none;
  box-shadow: none;
  font-family: 'Epilogue';
  width: 100%;

  /* Add variants */
  ${largeStyles}

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
