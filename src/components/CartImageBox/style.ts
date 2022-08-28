import styled from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const ImageWrapper = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 7px;

    button {
      border: 1px solid black;
      font-size: 24px;
      padding: 0 8px;
    }
    p {
        text-align: center;
        font-weight: 600;
    }
  }
  img {
    width: 121px;
    height: 190px;
  }
`;
