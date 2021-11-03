import { createGlobalStyle } from "styled-components";
// import RubikItalic from "../../assets/fonts/";
// import RubikReg from "../../assets/fonts/";

const FontStyles = createGlobalStyle`

  /* rubik-regular - latin */
  @font-face {
  font-family: 'Rubik';
  font-style: normal;
  /* font-weight: 400; */
  src: local(''),
       url('../../assets/fonts/rubik-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../assets/fonts/rubik-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../../assets/fonts/rubik-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../assets/fonts/rubik-v14-latin-regular.svg#Rubik') format('svg'); /* Legacy iOS */
}
  /* rubik-italic - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: italic;
    /* font-weight: 400; */
    src: local(''),
        url('../../assets/fonts/rubik-v14-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('../../assets/fonts/rubik-v14-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('../../assets/fonts/rubik-v14-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../../assets/fonts/rubik-v14-latin-italic.svg#Rubik') format('svg'); /* Legacy iOS */
}
`;

export default FontStyles;
