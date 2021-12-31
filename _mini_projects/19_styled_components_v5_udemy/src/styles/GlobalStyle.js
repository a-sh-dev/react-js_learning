import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
  }

  :root {
    --vibrant-green: #aef893;
    --dark-blue: #002443;
    --dark-green: #253C39;
    --light-bg: #E6F4F1;
    --blue: #82BBE5;
  }

  body {
    background: var(--light-bg);
    min-height: 100vh;
    margin: 0;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
