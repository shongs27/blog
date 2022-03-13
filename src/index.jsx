import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.base}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
