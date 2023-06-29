import { styled } from 'styled-components';
// https://codepen.io/ines/pen/MoaRYM?limit=all&page=72&q=animation
// [ ] 커스텀 하기
const Error = () => {
  return (
    <Container>
      <div id="termynal" data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700">
        <span data-ty="input">npx create-react-app Dlook</span>
        <span data-ty="progress"></span>
        <span data-ty="input">npm install</span>
        <span data-ty></span>
        <span data-ty="input">npm install @reduxjs/toolkit react-redux</span>
        <span data-ty="progress"></span>
        <span data-ty>Error</span>
        <span data-ty></span>
        <span data-ty="input">cd front-end</span>
        <span data-ty="input" data-ty-prompt=">>>">
          npm start
        </span>
        <span data-ty>401 402 403 404 405 406 407 408 409</span>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 100px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;

  --color-bg: #ddd;
  --color-text: #1a1e24;
  --color-text-subtle: #d76d77;

  padding: 0;
  margin: 0;
  background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  [data-termynal] {
    width: 750px;
    max-width: 100%;
    background: var(--color-bg);
    color: var(--color-text);
    font-size: 18px;
    font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;
    border-radius: 4px;
    padding: 75px 45px 35px;
    position: relative;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

[data-termynal]:before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    /* A little hack to display the window buttons in one pseudo element. */
    background: #d9515d;
    -webkit-box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
            box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
}

[data-ty] {
    display: block;
    line-height: 2;
}

[data-ty]:before {
    /* Set up defaults and ensure empty lines are displayed. */
    content: '';
    display: inline-block;
    vertical-align: middle;
}

[data-ty="input"]:before,
[data-ty-prompt]:before {
    margin-right: 0.75em;
    color: var(--color-text-subtle);
}

[data-ty="input"]:before {
    content: '$';
}

[data-ty][data-ty-prompt]:before {
    content: attr(data-ty-prompt);
}

[data-ty-cursor]:after {
    content: attr(data-ty-cursor);
    font-family: monospace;
    margin-left: 0.5em;
    -webkit-animation: blink 1s infinite;
            animation: blink 1s infinite;
}


/* Cursor animation */

@-webkit-keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes blink {
    50% {
        opacity: 0;
`;
export default Error;
