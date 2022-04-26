import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.base}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
