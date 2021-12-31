import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background: ${(props) =>
    props.secondary ? 'var(--blue)' : 'var(--dark-blue)'};
  font-weight: bold;
  border: none;
  display: block;
  white-space: none;
  box-shadow: none;
  font-family: 'Epilogue';
  width: 100%;

  /* Add variants */
  ${(props) =>
    props.large
      ? css`
          padding: 1.8rem 2.8rem;
          border-radius: 0.8rem;
          font-size: 1.5em;
        `
      : css`
          padding: 0.85rem 1.5rem;
          border-radius: 5px;
          font-size: 1em;
        `}

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
