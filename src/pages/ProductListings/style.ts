import styled from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const ListingsWrapper = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 45px 0 55px;
    ${desktopFirstResponsiveness(400, { fontSize: '32px' })}
  }

  & > div {
    &:first-of-type {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 25px;
      row-gap: 80px;
      ${desktopFirstResponsiveness(900, { gridTemplateColumns: '1fr 1fr' })}
      ${desktopFirstResponsiveness(650, { rowGap: '60px' })}
      ${desktopFirstResponsiveness(550, { gridTemplateColumns: '1fr' })}
    }
  }
`;
