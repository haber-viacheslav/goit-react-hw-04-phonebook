import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const FormWrap = styled(Form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormInputWrp = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormLabel = styled.span`
  font-size: 16px;
`;

export const FormInput = styled(Field)`
  font-size: 18px;
  padding: 4px 10px;
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

export const FormErrorMessage = styled(ErrorMessage)`
  position: absolute;
  transform: translateY(60px);
  color: red;
`;

export const FormButton = styled.button`
  display: inline-block;
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
