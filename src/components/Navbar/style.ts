import styled from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const NavbarWrapper = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 67px 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  ${desktopFirstResponsiveness(730, { padding: '20px 30px 8px' })}

  & > div {
    &:first-of-type {
      display: flex;
      ${desktopFirstResponsiveness(600, { display: 'none' })}
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

    &:last-of-type {
      display: flex;
      align-items: flex-start;
      select {
        padding: 0 2px 0 7px;
      }

      div {
        position: relative;
        svg {
          cursor: pointer;
          width: 19px;
          margin-left: 10px;
          transform: translateY(-2px);
          z-index: 2;
        }
        & > span {
          position: absolute;
          cursor: pointer;
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
          &::after {
            content: '';
            position: absolute;
            height: 27px;
            width: 32px;
            top: -1px;
            right: -2px;
            border-radius: 15px;
          }
        }
        #popup-cart {
          background-color: white;
          padding: 25px 13px;
          position: absolute;
          right: -17px;
          top: 160%;
          z-index: 900;
          width: max-content;

          h3 {
            font-weight: normal;
            font-size: 15px;
          }

          .cart-info {
            margin-top: 35px;
            display: flex;
            & > div:first-child {
              margin-right: 23px;
            }
          }
        }
      }
    }
  }

  a > svg {
    align-self: center;
    margin: -4px 0 0 -65px;
    ${desktopFirstResponsiveness(1150, { marginLeft: '-70px' })}
    ${desktopFirstResponsiveness(950, { marginLeft: '-50px' })}
    ${desktopFirstResponsiveness(600, { margin: '-5px 0 0 -5px' })}
  }

  .blur {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 800;
    top: 0;
    left: 0;
    background-color: rgba(57, 55, 72, 0.22);
    margin-top: 60.3px;
    opacity: 0.5;
  }
`;
