import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background: #fab;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
