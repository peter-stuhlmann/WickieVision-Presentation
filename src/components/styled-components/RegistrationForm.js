import React from 'react';
import styled from 'styled-components';

const StyledRegistrationForm = styled.div`
  form {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 90vh;
    overflow-y: scroll;
    box-sizing: border-box;

    h3 {
      flex: 100%;
    }

    label {
      flex: 35%;
      padding: 5px 10px;
      color: #000;
      margin-bottom: 10px;
    }

    input,
    textarea {
      flex: 60%;
      padding: 5px 10px;
      color: #000;
      font-size: 20px;
      background-color: whitesmoke;
      border: 2px solid #57aedc;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-right: 25px;
      transition: all 0.1s ease-in-out;
      outline: 0;
    }

    div {
      flex: 100%;
      margin-bottom: 15px;
    }

    input[type='submit'] {
      flex: 20%;
      background-color: #57aedc;
      color: #fff;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: #fff;
        color: #57aedc;
      }
    }

    &::-webkit-scrollbar {
      width: 15px;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #57aedc;
      outline: 1px solid #57aedc;
      border-radius: 10px;
    }
  }
`;
export const RegistrationForm = props => {
  const { children } = props;
  return <StyledRegistrationForm>{children}</StyledRegistrationForm>;
};
