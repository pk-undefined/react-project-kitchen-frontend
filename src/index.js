import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

import { createGlobalStyle } from 'styled-components';

import ConsolasWoff from './fonts/Consolas.woff';
import ConsolasWoff2 from './fonts/Consolas.woff2';
import PressStart2pRegularWoff from './fonts/press-start-2p-v9-latin_cyrillic-regular.woff';
import PressStart2pRegularWoff2 from './fonts/press-start-2p-v9-latin_cyrillic-regular.woff2';

const Global = createGlobalStyle`
@font-face {
  font-family: 'Consolas';
  font-weight: normal;
  font-style: normal;
  src:
    url('${ConsolasWoff}') format('woff'),
    url('${ConsolasWoff2}') format('woff2');
}

@font-face {
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
  src:
    url('${PressStart2pRegularWoff}') format('woff'),
    url('${PressStart2pRegularWoff2}') format('woff2');
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-family: Consolas;
  font-style: normal;
  color: #EBEBEB;
  // background: #0A0A0A;
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
