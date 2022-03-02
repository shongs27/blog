import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
