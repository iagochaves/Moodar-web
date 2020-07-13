import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  max-width: 960px;
  justify-content: space-between;
  img {
    max-width: 50px;
  }
  a {
    background: #ec6375;
    padding: 15px;
    text-decoration: none;
    border-radius: 5px;
    color: #fff;
    transition: background 0.5s;
    &:hover {
      background: ${shade(0.3, '#EC6375')};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  /* color: #3a3a3a; */
  color: #f0f0f5;
  max-width: 600px;
  line-height: 56px;
  margin-top: 60px;
`;
export const Filter = styled.p`
  font-size: 15px;
  margin-top: 10px;
  color: ${shade(0.1, '#f0f0f5')};
`;
export const Select = styled.select`
  background-color: #04d361;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  padding: 12px;
  width: 250px;
  border: none;
  border-radius: 5px 5px 5px 5px;
  font-size: 20px;

  -webkit-appearance: button;
  appearance: button;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 960px;

  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 960px;

  a + a {
    margin-top: 16px;
  }
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 20px;

    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(10px);
    }
    img {
      width: 64px;
      height: 64px;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
      span {
        margin-left: 5%;
        font-size: 15px;
        padding: 5px;

        background-color: #ec6375;
        border-radius: 5px 5px 5px 5px;
        color: #f5f5eb;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
