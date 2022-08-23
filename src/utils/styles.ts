import { css, CSSObject } from 'styled-components';

export function desktopFirstResponsiveness(screen: number, styles: CSSObject) {
  return css`
    @media only screen and (max-width: ${screen}px) {
      ${styles}
    }
  `;
}
