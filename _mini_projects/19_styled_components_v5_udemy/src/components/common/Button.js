import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? 'black' : '#fab')};
  font-weight: bold;
  border: none;
  display: block;
  white-space: none;
  box-shadow: none;

  /* Add variants */
  ${(props) =>
    props.large
      ? css`
          padding: 1.8rem 2.8rem;
          border-radius: 0.8rem;
          font-size: 1.5em;
        `
      : css`
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1em;
        `}

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
