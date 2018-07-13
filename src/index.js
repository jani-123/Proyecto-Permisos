import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PermisosApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from './store/store';
const Index = () => (
  <Provider store={store}>
    <PermisosApp />
  </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();





