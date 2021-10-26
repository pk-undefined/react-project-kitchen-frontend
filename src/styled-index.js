import { createGlobalStyle } from 'styled-components';
import { fontFaces } from './fonts/fonts';

export const Global = createGlobalStyle`

${fontFaces};

:root {
  --bg-color-primary: #0a0a0a;
  --bg-color-secondary: #1f1f1f;
  --color-default: #ebebeb;
  --color-inactive: #b8b8b8;
  --color-accent: #f00;
  --font-family-default: 'Consolas', 'Arial', sans-serif;
  --font-family-title: 'Press Start 2P';
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-family: Consolas;
  font-style: normal;
  color: var(--color-default);
  background-color: var(--bg-color-primary);
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
}

body::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 100px rgba(255, 0, 0, 0.2); 
  -webkit-box-shadow: inset 0 0 100px rgba(255, 0, 0, 0.2); 
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
}

h1 {
  font-size: 48px;
  line-height: 64px;
}

h2 {
  font-size: 24px;
  line-height: 40px;
}

a,
a:focus,
a:hover {
    color: var(--color-default);
    text-decoration: none;
}

fieldset {
  border-width: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
}

li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}
`;
