import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { createGlobalStyle } from 'styled-components';
import App from './components/App';

import { store, history } from './store';

import { fontFaces } from './fonts/fonts';

const Global = createGlobalStyle`

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

li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}
`;

ReactDOM.render(
  <>
    <Global />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </>,

  document.getElementById('root'),
);
