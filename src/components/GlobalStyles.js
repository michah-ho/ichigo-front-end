import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --bg-color-1: #2c88d9;
    --bg-color-2: #d3455b;
    --bg-color-3: #897a5f;
    --bg-color-4: #ac6363;
    --bg-color-5: #730fc3;
    --bg-color-6: #d1eeec;
    --bg-color-7: #207868;
    --bg-color-8: #6558f5;
    --bg-color-9: #4b5c6b;
  }
  * {
    box-sizing:border-box;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;