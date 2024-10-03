import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  *:before,
  *:after {
    box-sizing: border-box;
  };

  a,
  a:visited {
    text-decoration: none;
    font-family: "Manrope", sans-serif;
    cursor: pointer;
  };

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Manrope", sans-serif;
    color: #595959;
    background-color: #F4F4F4;
  };
`;
