import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 44px;
      border: 0px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px 0;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      border: 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    border: 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.2, '#f64c75')};
    }
  }
`;
