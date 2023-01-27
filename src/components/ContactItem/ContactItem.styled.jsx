import styled from 'styled-components';

export const ContactItemButton = styled.button`
  display: inline-block;
  margin-left: auto;
  max-width: 120px;
  align-self: center;
  padding: 4px 12px;
  color: white;
  font-size: 14px;
  border-radius: 12px;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ffbb00;
    transform: scale(1.1);
    box-shadow: 2px 6px 8px #b8c501, -2px -2px 6px #fbff00;
  }
`;
export const ContactItemWrp = styled.div`
  width: 500px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: linear-gradient(145deg, #0d013e, #2711ba);
  box-shadow: 2px 6px 8px #2e2bc2, -2px -2px 6px #1d06eb;
`;
