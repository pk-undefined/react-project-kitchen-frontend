import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from './styled-index';
import App from './components/app/App';
import './vendor/normalize.css';
import './i18n/i18n';
import store from './store/index';
import Loader from './components/common/loader/loader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Router>
        <Global />
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root'),
);
