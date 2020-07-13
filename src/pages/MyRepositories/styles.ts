import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 50px;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  color: #fff;
  margin-top: 80px;
  margin-bottom: 50px;
`;

export const NoCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;

  h1 {
    color: #fff;
    font-size: 25px;
  }
`;

export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    transition: transform 1.2s;
    &:hover {
      transform: scale(1.04);
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;
      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }

    span {
      float: right;
      margin-top: -28px;

      font-size: 15px;
      padding: 5px;

      background-color: #ec6375;
      border-radius: 5px 5px 5px 5px;
      color: #f5f5eb;
      transition: background 0.4s;
      &:hover {
        background: ${shade(0.2, '#ec6375')};
      }
    }
  }
`;
