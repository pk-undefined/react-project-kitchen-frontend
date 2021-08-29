import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

import { createGlobalStyle } from 'styled-components';

import { fontFaces } from './fonts/fonts';

const Global = createGlobalStyle`

${fontFaces}

:root {
  --bg-color-primary: #0A0A0A;
  --bg-color-secondary: #1F1F1F;
  --color-default: #EBEBEB;
  --color-inactive: #B8B8B8;
  --color-accent: #FF0000;
  --font-family-default: 'Consolas';
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

a, a:focus, a:hover {
    color:  var(--color-default);
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
  <React.Fragment>
    <Global />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.Fragment>,

  document.getElementById('root')
);
