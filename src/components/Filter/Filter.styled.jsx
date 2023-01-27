import styled from 'styled-components';

export const FilterWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FilterInput = styled.input`
  padding: 4px 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid yellow;
  border-radius: 8px;
  outline: none;
  color: #f7f4f0;
  transition: 250ms box-shadow ease-in-out;
  &:focus,
  &:active {
    box-shadow: 2px 2px 4px #b8c501;
  }
`;
