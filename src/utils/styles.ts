import { css, CSSObject } from 'styled-components';

export const desktopFirstResponsiveness = (
  screen: number,
  styles: CSSObject
) => css`
  @media only screen and (max-width: ${screen}px) {
    ${styles}
  }
`;
