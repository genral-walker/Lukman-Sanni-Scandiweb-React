import { createGlobalStyle } from 'styled-components';

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
