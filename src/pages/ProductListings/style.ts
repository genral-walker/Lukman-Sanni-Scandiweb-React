import styled from 'styled-components';

export const ListingsWrapper = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 45px 0 55px;
  }

  & > div {
    &:first-of-type {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;
      row-gap: 45px;
    }
  }
`;
