import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    --vibrant-green: #aef893;
  }

  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Epilogue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
