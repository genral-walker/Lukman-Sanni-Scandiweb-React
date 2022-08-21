import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 67px 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  & > div {
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

    &:last-of-type {
      display: flex;
      align-items: flex-start;
      select {
        padding-inline: 7px;
      }

      svg {
        width: 18px;
        margin-left: 10px;
        transform: translateY(-2px);
      }
    }
  }

  a > svg {
    align-self: center;
    margin-left: -65px;
  }
`;
