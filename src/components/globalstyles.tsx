import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  :root {
  // Colors
  --primary-white-color: #fff;
  --secondary-white-color: #f0f0f0;

  --primary-black-color: #1B1B1A;
  --secondary-black-color: #1b1a1a;

  --primary-gray-color: #f2f2f5;
  --secondary-gray-color: #adadad;

  --primary-blue-color: #7348FF;
  --secondary-blue-color: #0083ce;

  --black-background: #000814;

  // Fonts
  --regular-font: "Inter", sans-serif;
  --secondary-font:"Manrope", sans-serif;
}
`

export default GlobalStyle
