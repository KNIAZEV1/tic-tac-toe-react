import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  padding: 0;
  background: aliceblue;
  border: 2px solid royalblue;
  color: #00000;
  font-size: 62px;
  font-weight: bold;
  text-align: center;
  opacity: 0.7;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;
