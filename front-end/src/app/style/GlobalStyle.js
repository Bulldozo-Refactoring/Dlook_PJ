import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// npm install styled-reset
const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "GmarketSans";
  src: url("../assets/fonts/GmarketSansTTFLight.ttf") format("woff");
  font-weight: 300;
  font-style: Light;
  font-display: swap;
}
@font-face {
  font-family: "GmarketSans";
  src: url("../assets/fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: 500;
  font-style: medium;
  font-display: swap;
}
@font-face {
  font-family: "GmarketSans";
  src: url("../assets/fonts/GmarketSansTTFBold.ttf") format("woff");
  font-weight: 700;
  font-style: bold;
  font-display: swap;
}
:root {
    --primary-100: #424874;
    --primary-200: #a6b1e1;
    --primary-300: #fdf6fd;
    --accent-100: #d9acf5;
    --accent-200: #ffcefe;
    --text-100: #292524;
    --text-200: #64748b;
    --bg-100: #ffffff;
    --bg-200: #f5f5f5;
    --bg-300: #cccccc;
  }
  * {
    color:  ${({ theme }) => theme.lightTheme.t100};
    font-family: "GmarketSans";
    font-weight: 300;
  }
  body {
    -ms-overflow-style: none;
    font-family: inherit;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: ${({ theme }) => theme.lightTheme.t100};
    background: ${({ theme }) => theme.lightTheme.bg100};
  }
  ::-webkit-scrollbar {
    display: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul,
  ol {
    list-style: none;
  }
  ul li::marker {
    display: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:focus {
    background: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  button,
  input,
  textarea,
  select {
    outline: none;
  }
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0;
    resize: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    border: none;
  }
  dl,
  dd {
    margin: 0;
    padding: 0;
  }
  fieldset {
    border: none;
    padding: 0;
  }
  p {
    margin-block: 0;
  }
  
  /* 필요 속성 추가 */
  #wrap {
    overflow-x: hidden;
  }
  #header {
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.lightTheme.t300};
    z-index: 100;
  }
  .container_inner {
    margin: 0 auto;
    padding: 0 40px;
    max-width: 1280px;
  }
  #footer {
    height: 200px;
    background-color:${({ theme }) => theme.lightTheme.t300};
  }
  button {
    color: var(--text-100);
  }
  /* 알고리즘 */
  #Algorithms.container_inner {
    padding: 80px 40px;
  }
  
`;

export default GlobalStyle;