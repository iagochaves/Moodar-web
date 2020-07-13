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

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  padding: 40px;
  background: #f0f0f5;
  border-radius: 10%;

  p {
    margin-top: 40px;
    font-size: 18px;
  }

  header {
    display: flex;
    align-items: center;

    a {
      font-size: 20px;
      margin-right: 20px;
      margin-left: auto;
      background: #04d361;
      padding: 20px;
      text-decoration: none;
      border-radius: 5px;
      color: #fff;
      transition: background 0.5s;
      &:hover {
        background: ${shade(0.3, '#04d361')};
      }
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: ##3d3d4d;
      }
      p {
        font-size: 18px;
        color: ##737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;

    list-style: none;
    margin-top: 40px;
    li + li {
      margin-left: 80px;
    }
    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;
