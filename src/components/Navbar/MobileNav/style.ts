import styled from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const MobileNavWrapper = styled.nav`
  background: white;
  display: none;
  justify-content: space-between;
  padding: 20px 30px 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  ${desktopFirstResponsiveness(600, { display: 'flex' })};

  & > svg {
    transform: translateY(-4px);
  }

  .right {
    display: flex;
    align-items: flex-start;
    select {
      padding-inline: 7px;
    }

    div {
      position: relative;
      cursor: pointer;
      svg {
        width: 18px;
        margin-left: 10px;
        transform: translateY(-2px);
        z-index: 2;
      }
      & > span {
        position: absolute;
        right: -7px;
        top: -5px;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        background-color: black;
        color: white;
        font-size: 10px;
        display: grid;
        place-items: center;
        padding-bottom: 3px;
      }
    }

    .menu {
      transform: translateY(-8px);
      margin-left: 25px;
      ${desktopFirstResponsiveness(360, { marginLeft: '20px' })}
    }
  }
`;

/*
 &:first-of-type {
      display: flex;
      & > * {
        margin-right: 25px;
        font-weight: 500;
        cursor: pointer;
        &:first-of-type {
          color: #5ece7b;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 120%;
            height: 2px;
            background-color: currentColor;
            left: -7px;
            bottom: -8px;
            cursor: unset;
          }
        }
      }
    }
*/
