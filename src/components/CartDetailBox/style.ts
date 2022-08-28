import styled from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const DetailWrapper = styled.div`
  h2 {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 6px;
  }

  p {
    &:first-of-type {
      font-weight: 300;
      span {
        display: block;
        font-weight: 500;
        margin: 10px 0;
      }
    }

    &:nth-of-type(2) {
      font-size: 14px;
      margin-bottom: 4px;

      & + div {
        button {
          height: 24px;
          width: 26px;
          border: 1px solid #1d1f22;
          margin-right: 6px;
          font-size: 14px;
        }
      }
    }

    &:last-of-type {
      font-size: 14px;
      margin-bottom: 4px;
      margin-top: 7px;

      & + div {
        button {
          height: 18px;
          width: 18px;
          border: 1px solid #1d1f22;
          margin-right: 8px;

          &:focus {
            outline: 1px solid green;
            outline-offset: 1px;
          }
        }
      }
    }
  }
`;
