import { createGlobalStyle } from 'styled-components';
import { desktopFirstResponsiveness } from 'utils/styles';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
  padding: 0 65px;
    ${desktopFirstResponsiveness(730, { padding: '0 30px' })}
  /* overflow: hidden; */
  /* font-family: 'Roboto', sans-serif; */
}

a {
  text-decoration: none;
  color: currentColor;
}

li {
  list-style: none;
}

button,
input,
textarea,
select,
option {
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
}

textarea {
  cursor: text;
}
`;
